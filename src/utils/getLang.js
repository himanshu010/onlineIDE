const getLang = (ext) => {
  if (ext === "cpp" || ext === "c") {
    return "cpp17";
  }
  if (ext === "py") {
    return "python3";
  }

  if (ext === "php") {
    return "php";
  }
  if (ext === "rb" || ext === "erb" || ext === "irb") {
    return "ruby";
  }
  if (ext === "java") {
    return "java";
  }

  return undefined;
};

module.exports = getLang;
