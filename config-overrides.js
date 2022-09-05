const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    useBabelRc()
);



/*NOTE:
    - file babelrc không được tự động  nạp vào webpack, do đó cần phải được cấu hình.
*/