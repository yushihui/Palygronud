import {Pipe, PipeTransform} from '@angular/core';
import {YamlParserException} from './yaml-parser-exception';

@Pipe({
  name: 'parserExceptionPipe'
})
export class ParserExceptionPipePipe implements PipeTransform {
  transform(ype: YamlParserException, args?: any): string {
    return (
      'Line: ' + ype.parsedLine + '; ' + ype.rawMessage + ' -- ' + ype.snippet
    );
  }
}
