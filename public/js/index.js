console.log("loaded");
onload = function () {
  // Setup
  var languageOption = document.getElementById("language");
  var themeOption = document.getElementById("theme");
  var codeEditor = document.getElementById("editor");
  var textarea = $('textarea[name="description"]');

  var theme = "monokai";
  var lang = "C++ 17";

  // Ace Setup
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/c_cpp");
  editor.setShowPrintMargin(false);

  const cpp_string =
    "#include <iostream>\r\n" +
    "using namespace std;\r\n" +
    "\r\n" +
    "int main() {\r\n" +
    "\t// your code goes here\r\n" +
    "\treturn 0;\r\n" +
    "}\r\n";

  const python_string = "# write your python code here\r\n";
  const java_string =
    "public class Solution {\r\n" +
    "    public static void main(String[] args) {\r\n" +
    "        // Write your code here\r\n" +
    "    }\r\n" +
    "}";

  const php_string = "<?php\r\n\r\n// your code goes here\r\n";
  const ruby_string = "# write your ruby code here\r\n";
  const c_string =
    "#include <stdio.h>\r\n" +
    "\r\n" +
    "int main(void) {\r\n" +
    "\t// your code goes here\r\n" +
    "\treturn 0;\r\n" +
    "}\r\n" +
    "\r\n";
  changeContent(cpp_string, "c_cpp");
  languageOption.onchange = function () {
    switch (this.value) {
      case "cpp17":
      case "cpp14":
      case "cpp":
        changeContent(cpp_string, "c_cpp");
        break;
      case "c":
        changeContent(c_string, "c_cpp");
        break;
      case "python2":
      case "python3":
        changeContent(python_string, "python");
        break;
      case "php":
        changeContent(php_string, "php");
        break;
      case "ruby":
        changeContent(ruby_string, "ruby");
        break;
      case "java":
        changeContent(java_string, "java");
        break;
      default:
        changeContent(cpp_string, "cpp");
        break;
    }
  };

  // Change theme dynamically
  themeOption.onchange = function () {
    switch (this.value) {
      case "monokai":
        changeTheme("monokai");
        break;
      case "dawn":
        changeTheme("dawn");
        break;
      case "github":
        changeTheme("github");
        break;
      case "plastic":
        changeTheme("iplastic");
        break;
      case "solarizedlight":
        changeTheme("solarized_light");
        break;
      case "sql_server":
        changeTheme("sqlserver");
        break;
      case "ambiance":
        changeTheme("ambiance");
        break;
      case "chaos":
        changeTheme("chaos");
        break;
      case "gruvbox":
        changeTheme("gruvbox");
        break;
      case "solarized_dark":
        changeTheme("solarized_dark");
        break;
      case "terminal":
        changeTheme("terminal");
        break;
      default:
        changeTheme("monokai");
        break;
    }
  };

  const ReLang = (rLang) => {
    switch (rLang) {
      case "cpp17":
      case "cpp14":
      case "cpp":
      case "c":
        return "c_cpp";
        break;
      case "js":
        return "javascript";
        break;
      case "css":
        return "css";
        break;
      case "python2":
      case "python3":
        return "python";
        break;
      case "php":
        return "php";
        break;
      case "ruby":
        return "ruby";
        break;
      case "java":
        return "java";
        break;
      default:
        return "c_cpp";
        break;
    }
  };

  const ReTheme = (rTheme) => {
    switch (rTheme) {
      case "monokai":
        return "monokai";
        break;
      case "dawn":
        return "dawn";
        break;
      case "github":
        return "github";
        break;
      case "plastic":
        return "iplastic";
        break;
      case "solarizedlight":
        return "solarized_light";
        break;
      case "sql_server":
        return "sqlserver";
        break;
      case "ambiance":
        return "ambiance";
        break;
      case "chaos":
        return "chaos";
        break;
      case "gruvbox":
        return "gruvbox";
        break;
      case "solarized_dark":
        return "solarized_dark";
        break;
      case "terminal":
        return "terminal";
        break;
      default:
        return "monokai";
        break;
    }
  };

  // Functions

  function changeTheme(type) {
    theme = type;
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/" + theme);
    editor.setShowPrintMargin(false);
  }
  editor.getSession().setValue(textarea.val());
  editor.getSession().on("change", function () {
    textarea.val(editor.getSession().getValue());
  });

  function changeContent(content, type) {
    var elementExists = document.getElementById("editor");
    document.body.removeChild(elementExists);

    var div = document.createElement("div");
    div.textContent = content;
    div.id = "editor";
    document.body.appendChild(div);

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/" + theme);
    editor.getSession().setMode("ace/mode/" + type);
    editor.setShowPrintMargin(false);

    editor.getSession().on("change", function () {
      textarea.val(editor.getSession().getValue());
    });
    textarea.val(content);
  }
  function changeContent1(content, type) {
    var elementExists = document.getElementById("editor");
    document.body.removeChild(elementExists);

    var div = document.createElement("div");
    div.textContent = content;
    div.id = "editor";
    document.body.appendChild(div);

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/" + theme);
    editor.getSession().setMode("ace/mode/" + type);
    editor.setShowPrintMargin(false);
    editor.getSession().on("change", function () {
      textarea.val(editor.getSession().getValue());
    });
    textarea.val(content);
  }

  var reset = document.getElementById("getScript").value;
  if (reset) {
    var lang = ReLang(document.getElementById("getLang").value);
    var theme = ReTheme(document.getElementById("getTheme").value);

    themeOption.value = document.getElementById("getTheme").value;
    languageOption.value = document.getElementById("getLang").value;

    var elementExists = document.getElementById("editor");
    document.body.removeChild(elementExists);
    var div = document.createElement("div");
    div.textContent = reset;
    div.id = "editor";
    document.body.appendChild(div);
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/" + theme);
    editor.getSession().setMode("ace/mode/" + lang);
    editor.setShowPrintMargin(false);
    editor.getSession().on("change", function () {
      textarea.val(editor.getSession().getValue());
    });
    textarea.val(reset);
  }
};

$(function () {
  $("#button").click(function () {
    $("#button").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $("#button").removeClass("onclic");
      $("#button").addClass("validate", 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $("#button").removeClass("validate");
    }, 1250);
  }
});
