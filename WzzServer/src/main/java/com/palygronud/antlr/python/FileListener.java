package com.palygronud.antlr.python;

import com.palygronud.domain.inventory.AnsibleCmdOptions;
import com.palygronud.domain.inventory.AnsibleModule;
import org.yaml.snakeyaml.Yaml;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FileListener extends Python3BaseListener {
    private AnsibleModule ansibleModule = new AnsibleModule();

    public void enterExpr_stmt(Python3Parser.Expr_stmtContext ctx) {
        List<Python3Parser.Testlist_star_exprContext> exprs = ctx.testlist_star_expr();
        if (exprs.size() < 2) {
            return;
        }
        String expr1 = exprs.get(0).getText();
        String expr2 = exprs.get(1).getText();
        switch (expr1) {
            case DocumentTags.DOCUMENTATION:
                parseDocument(expr2);
                break;
            case DocumentTags.EXAMPLES:
                ansibleModule.setExample(trimLongText(expr2));
                break;
            case DocumentTags.RETURNS:
                ansibleModule.setExpectReturn(trimLongText(expr2));
                break;
        }
    }

    private String trimLongText(String text) {

        if (text.endsWith("\r\n\"\"\"") && text.startsWith("\"\"\"\r\n") ) {
            return text.substring(5, text.length() - 5);
        }
        return text;
    }

    private void parseDocument(String document) {

        document = document.substring(4, document.length() - 3);
        document = document.replaceAll("\\\\+", "\\\\");
//        ObjectMapper mapper = new ObjectMapper(new YAMLFactory());
//        Map<String, Object> stringObjectMap  = null;
//        try {
//            stringObjectMap = mapper.readValue(document, Map.class);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        Yaml yaml = new Yaml();
        Map<String, Object> stringObjectMap = yaml.loadAs(document, Map.class);
        stringObjectMap.forEach((k, v) -> {
            switch (k) {
                case DocumentTags.MODULE:
                    ansibleModule.setName(v.toString());
                    break;
                case DocumentTags.AUTHOR:
                    ansibleModule.setAuthor(v.toString());
                    break;
                case DocumentTags.VERSION:
                    ansibleModule.setExample(v.toString());
                    break;
                case DocumentTags.S_DESC:
                    ansibleModule.setSDesc((String) v);
                    break;
                case DocumentTags.EXTEND:
                    if(v instanceof String){
                        ansibleModule.setExtends_Module((String) v);
                    }
                    if(v instanceof List){
                        ansibleModule.setExtends_Module(list2String((List)v, ","));
                    }

                    break;
                case DocumentTags.DESC:
                    if (v instanceof List) {
                        ansibleModule.setDesc(list2String((List) v, "/n"));
                    }
                    break;
                case DocumentTags.NOTES:
                    if (v instanceof List) {
                        ansibleModule.setNotes(list2String((List) v, "/n"));
                    }
                    if (v instanceof String) {
                        ansibleModule.setNotes(v.toString());
                    }
                    break;
                case DocumentTags.OPTIONS:
                    ansibleModule.setOptions(processOptions((Map) v));
                    break;
            }
        });
    }

    private String list2String(List<Object> elments, String delimiter) {
        return elments.stream().map(String::valueOf)
                .collect(Collectors.joining(delimiter));
    }

    private List<AnsibleCmdOptions> processOptions(Map optionMap) {
        List<AnsibleCmdOptions> result = new ArrayList<>();
        optionMap.forEach((k, v) -> {
            AnsibleCmdOptions option = new AnsibleCmdOptions((String) k);
            Map opDetail = (Map) v;
            setOptionDetail(opDetail, option);
            result.add(option);
        });
        return result;
    }

    private void setOptionDetail(Map<String, Object> detail, AnsibleCmdOptions option) {
        detail.forEach((x, y) -> {
            switch (x) {
                case DocumentTags.OP_DESC:
                    if(y instanceof String){
                        option.setDescription(y.toString());
                    }else{
                        option.setDescription(list2String((List) y, "\n"));
                    }

                    break;
                case DocumentTags.OP_ALIASES:
                    option.setAlias(list2String((List) y, ","));
                    break;
                case DocumentTags.OP_TYPE:
                    option.setType(y.toString());
                    break;
                case DocumentTags.OP_CHOICES:
                    option.setChoices(list2String((List) y, ","));
                    break;
                case DocumentTags.OP_DEFAULT:
                    option.setDefaultVal(String.valueOf(y));
                    break;
                case DocumentTags.OP_ADDED:
                    option.setVersion_added(y.toString());
                    break;
            }
        });
    }

    public AnsibleModule getAnsibleModule() {
        return this.ansibleModule;
    }

}
