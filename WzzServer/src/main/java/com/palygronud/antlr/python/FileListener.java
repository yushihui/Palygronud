package com.palygronud.antlr.python;

import com.palygronud.domain.inventory.AnsibleModule;
import org.yaml.snakeyaml.Yaml;

import java.util.List;

public class FileListener extends Python3BaseListener {
    private AnsibleModule ansibleModule;

    public void enterExpr_stmt(Python3Parser.Expr_stmtContext ctx) {
        List<Python3Parser.Testlist_star_exprContext> exprs = ctx.testlist_star_expr();
        if (exprs.size() < 2) {
            return;
        }
        ansibleModule = new AnsibleModule();
        String expr1 = exprs.get(0).getText();
        String expr2 = exprs.get(1).getText();
        switch (expr1) {
            case "DOCUMENTATION":
                parseDocument(expr2);
                break;
            case "EXAMPLES":
                ansibleModule.setExample(expr2);
                break;
            case "RETURNS":
                ansibleModule.setNote(expr2);
                break;


        }


    }

    private void parseDocument(String document) {

        Yaml yaml = new Yaml();
        yaml.load(document);
    }

    public AnsibleModule getAnsibleModule() {
        return this.ansibleModule;
    }

}
