export interface YamlParserException {
  message: string;
  parsedFile: string;
  parsedLine: number;
  rawMessage: string;
  snippet: string;
}
