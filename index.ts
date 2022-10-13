import { tokens as aliases, createDarkTheme, createLightTheme } from "@fluentui/react-components";
import { tridentBrandColorRamp } from "./tridentBrandColorRamp";
import { writeFileSync, mkdir } from 'fs';
import {resolve} from 'path';


const darkTheme = createDarkTheme(tridentBrandColorRamp);
const lightTheme = createLightTheme(tridentBrandColorRamp);

const objToCss = (obj: any) => {
    var keys = Object.keys(obj)
    var values = Object.values(obj);
    if (!keys.length) return ''
    var i, len = keys.length
    var result = ''
  
    for (i = 0; i < len; i++) {
      var key = keys[i]
      var val = obj[key]
      result += `\t--${key}: ${val};\n`;
    }
  
    return result
  }

  const formatObj = (obj: any) => {
    var keys = Object.keys(obj)
    var values = Object.values(obj);
    if (!keys.length) return ''
    var i, len = keys.length
    var result = ''
  
    for (i = 0; i < len; i++) {
      var key = keys[i]
      var val = obj[key]
      result += `\n\t${key}: "${val}",`;
    }
  
    return result
  }

  const formatJson = (obj: any) => {
    var keys = Object.keys(obj)
    var values = Object.values(obj);
    if (!keys.length) return ''
    var i, len = keys.length
    var result = ''
  
    for (i = 0; i < len; i++) {
      var key = keys[i]
      var val = obj[key]
      result += `\n\t"${key}": "${val}",`;
    }
  
    return result
  }

  const darkThemeCss =  objToCss(darkTheme);
  const lightThemeCss =  objToCss(lightTheme);
  const aliasesCss =  objToCss(aliases);

  const darkThemeTs = formatObj(darkTheme);
  const lightThemeTs = formatObj(lightTheme);
  const aliasesTs = formatObj(aliases);

  const darkThemeJson = formatJson(darkTheme);
  const lightThemeJson = formatJson(lightTheme);
  const aliasesJson = formatJson(aliases);


  const writeFile = (outputPath: string, fileContent: string, fileType: string, theme: string) => {
    if(fileType == 'css') {
      writeFileSync(outputPath, `:root { \n ${fileContent} }`, 'utf8');
    } 
    else if (fileType === 'scss') {
      if ( theme === 'aliases' ) {
        writeFileSync(outputPath, `@mixin install-fluent-${theme} { \n ${fileContent} }`, 'utf8');
      } else {
        writeFileSync(outputPath, `@mixin install-fluent-${theme}-theme { \n ${fileContent} }`, 'utf8');
      }
    }
    else if (fileType === 'ts') {
      if ( theme === 'aliases' ) {
        writeFileSync(outputPath, `const fluent${theme.charAt(0).toUpperCase() + theme.slice(1)} = { ${fileContent} }`, 'utf8');
      }
      else {
        writeFileSync(outputPath, `const fluent${theme.charAt(0).toUpperCase() + theme.slice(1)}Theme = { ${fileContent} }`, 'utf8');
      }
    }
    else if (fileType === 'json') {
          writeFileSync(outputPath, `{ ${fileContent} }`, 'utf8');
      }
  }

  mkdir('./dist', { recursive: true }, (err) => {
    if (err) throw err;
  });
  
  const darkThemeCssFile = writeFile(resolve(__dirname, './dist/trident-dark-theme.css'), darkThemeCss, 'css', 'dark');
  const lightThemeCssFile = writeFile(resolve(__dirname, './dist/trident-light-theme.css'), lightThemeCss, 'css', 'light');
  const aliasCssFile = writeFile(resolve(__dirname, './dist/trident-aliases.css'), aliasesCss, 'css', 'aliases');

  const darkThemeScssFile = writeFile(resolve(__dirname, './dist/trident-dark-theme.scss'), darkThemeCss, 'scss', 'dark');
  const lightThemeScssFile = writeFile(resolve(__dirname, './dist/trident-light-theme.scss'), lightThemeCss, 'scss', 'light');
  const aliasScssFile = writeFile(resolve(__dirname, './dist/trident-aliases.scss'), aliasesCss, 'scss', 'aliases');

  const darkThemeTsFile = writeFile(resolve(__dirname, './dist/trident-dark-theme.ts'), darkThemeTs, 'ts', 'dark');
  const lightThemeTsFile = writeFile(resolve(__dirname, './dist/trident-light-theme.ts'), lightThemeTs, 'ts', 'light');
  const aliasTsFile = writeFile(resolve(__dirname, './dist/trident-aliases.ts'), aliasesTs, 'ts', 'aliases');

  const darkThemeJsonFile = writeFile(resolve(__dirname, './dist/trident-dark-theme.json'), darkThemeJson, 'json', 'dark');
  const lightThemeJsonFile = writeFile(resolve(__dirname, './dist/trident-light-theme.json'), lightThemeJson, 'json', 'light');
  const aliasJsonFile = writeFile(resolve(__dirname, './dist/trident-aliases.json'), aliasesJson, 'json', 'aliases');


module.exports = {
  darkThemeCssFile,
  lightThemeCssFile,
  aliasCssFile,
  darkThemeScssFile,
  lightThemeScssFile,
  aliasScssFile,
  darkThemeTsFile,
  lightThemeTsFile,
  aliasTsFile,
  darkThemeJsonFile,
  lightThemeJsonFile,
  aliasJsonFile
}

