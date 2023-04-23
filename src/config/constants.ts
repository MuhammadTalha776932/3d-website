import swatch from "../assets/swatch.png";
import fileIcon from "../assets/file.png";
import ai from "../assets/ai.png";
import logoShirt from "../assets/logo-tshirt.png";
import stylishShirt from "../assets/stylish-tshirt.png";


export interface ITabs {
  name: string;
  icon: any;
}


export const EditorTabs: ITabs[] = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  // {
  //   name: "aipicker",
  //   icon: ai,
  // },
];

export const FilterTabs: ITabs[] = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export interface IDecalTypesNestedProperty {
  stateProperty: string;
  filterTab: string;
}

export interface IDecalTypes {
  logo: IDecalTypesNestedProperty
  full: IDecalTypesNestedProperty
}


export const DecalTypes: IDecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
