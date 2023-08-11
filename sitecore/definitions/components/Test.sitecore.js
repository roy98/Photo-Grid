import { CommonFieldTypes, SitecoreIcon, Manifest } from "@sitecore-jss/sitecore-jss-manifest";

export default function (manifest) {
  manifest.addComponent({
    name: "Test",
    icon: SitecoreIcon.DocumentTag,
    fields: [{
      name: "image_0",
      type: CommonFieldTypes.Image
    }, {
      name: "button_1622571137167",
      type: CommonFieldTypes.SingleLineText
    }, {
      name: "image_1623360483848",
      type: CommonFieldTypes.Image
    }]
  });
}
