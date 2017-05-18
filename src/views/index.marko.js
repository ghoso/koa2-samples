// Compiled using marko@4.3.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    await_tag = marko_loadTag(require("marko/taglibs/async/await-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>Marko Test </title></head><body>");

  component_globals_tag({}, out);

  await_tag({
      _dataProvider: data,
      _name: "data",
      renderBody: function renderBody(out, data) {
        out.w("<div> " +
          marko_escapeXml(data) +
          "</div>");
      }
    }, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/components/taglib/component-globals-tag",
      "marko/taglibs/async/await-tag",
      "marko/components/taglib/init-components-tag",
      "marko/taglibs/async/await-reorderer-tag"
    ]
  };
