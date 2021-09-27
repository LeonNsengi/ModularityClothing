// ----------------------------------------------------- ALL PROGRAM USE CASES ---------------------------------------------------



// function a person acccessing our technologies can use to set up a scraper and scrape stores
InventoryCollectionFunctions = {

  SitePath: () => {},
  ManualCategory: () => {
    // category
    // link
    // given category
    // get metadata
  },
  AutoCategory: () => {},
  SinglePageCollection: () => {},
  MultiPageCollection: () => {},
  TestSitePath: () => {},
  
}


const Rectangle = {
  x,
  y,
  width,
  height,
  top,
  right,
  bottom,
  left,
}



// Store Size Review
const GetPossibleImageElements = {
  PossibleImageElements: {
      ClassName,
      TagName,
      Rectangle,
      ImageSrc,
      ImageSrcSet,
      Image,
      ClassList,
  }, 
  UnlikelyImageElements: {
      ClassName,
      TagName,
      Rectangle,
      ImageSrc,
      ImageSrcSet,
      Image,
      ClassList,
      ChildTag,
  }, 
  Passed,
}

const GetImageFound = {
  ImageFound,
  CountedImages: [{
      ClassName,
      TagName,
      count,
  }],
  CountedImagesBreaks: {
      PathBreakTag,
      PathbreakClass,
      ClassList,
  },
  ImageClassOptions,
  Passed,
  ImageFoundParent,
}

const Validation = {
  ColorArray: [
      {
        ColorRGB,
        ContextualizedPath,
      },
  ],
  SpecifyPath,
  Path,
  ElementType,
  Passed,
}

const GetCardFound = {
  CardFound: {
      count: 60,
      ClassName: "grid-tile",
      TagName: "li",
  },
  CountedCards: [
      {
      count: 1,
      ClassName: "primary-content",
      TagName: "div",
      },
  ],
  CountedCardsBreaks: [
      {
      PathBreakTag: "div",
      PathBreakClass: "primary-content",
      ClassList: [
          "primary-content"
      ],
      count: 1,
      },
  ],
  CardClassOptions: "ClassNames",
  UnlikelyCardElements: [
      {
      ClassName: "pt_product-search-result ",
      TagName: "div",
      Rectangle,
      ClassList: [
          "pt_product-search-result",
          ""
      ]
      },
  ],
  CardFoundParent: "ul.search-result-items.tiles-container.hide-compare",
  Passed,
}


const FindCardChildren = {
  UnlikelyChildImages: {
      ClassName,
      TagName,
      Image,
      ImageSrc,
      ImageSrcSet,
      Value: Image,
      NoClass: "UseParents",
  },
  UnlikelyChildHrefs: {
      ClassName,
      TagName,
      Rectangle,
      CurrentHref,
      NoClass: "UseParents",
  },
  UnlikelyChildTexts:{
      ClassName,
      TagName,
      text,
      Value: text,
  },
  HrefsChildPossible:{
      ClassName,
      TagName,
      Rectangle,
      CurrentHref,
  },
  TextsChildPossible: {
      ClassName,
      TagName,
      text,
      Value: text,
  },
  ImagesChildPossible: {
      ClassName,
      TagName,
      Image,
      ImageSrc,
      ImageSrcSet,
      Value: Image,
  },
  Passed,
}

const FindChildrenPossible = {
  HrefsChildPossible: [
      {
        ClassName: "thumb-link js-canonical-link",
        TagName: "a",
        Rectangle,
        CurrentHref: "https://ca.boohoo.com/plus-floral-satin-shirt-dress/PZZ59880.html"
      },
  ],
  TextsChildPossible: [
      {
        ClassName: "name-link js-canonical-link",
        TagName: "a",
        text: "Plus Floral Satin Shirt Dress",
        CurrentHref: "https://ca.boohoo.com/plus-floral-satin-shirt-dress/PZZ59880.html",
        Value: "Plus Floral Satin Shirt Dress"
      },
  ],
  ImagesChildPossible: [
      {
        ClassName: "js-required ampliance-image product-tile-image lazyloaded",
        TagName: "img",
        Image: "https://media.boohoo.com/i/boohoo/pzz59880_navy_xl?$product_image_category_page$&fmt=webp",
        ImageSrc: "data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADCAQAAAAT4xYKAAAADklEQVR42mNkAAJGOAEAAC0ABNxMS2YAAAAASUVORK5CYII=",
        ImageSrcSet: "//media.boohoo.com/i/boohoo/pzz59880_navy_xl?$product_image_category_page$&fmt=webp 1x, //media.boohoo.com/i/boohoo/pzz59880_navy_xl?$product_image_category_page_2x$&fmt=webp 2x, //media.boohoo.com/i/boohoo/pzz59880_navy_xl?$product_image_category_page_3x$&fmt=webp 3x",
        Value: "https://media.boohoo.com/i/boohoo/pzz59880_navy_xl?$product_image_category_page$&fmt=webp"
      },
  ],
  BiggestHrefElement: {
      ClassName: "thumb-link js-canonical-link",
      TagName: "a",
      Rectangle,
      CurrentHref: "https://ca.boohoo.com/plus-floral-satin-shirt-dress/PZZ59880.html"
  },
  KeyLink: "https://ca.boohoo.com/plus-floral-satin-shirt-dress/PZZ59880.html",
  Passed,
}

const GetCategoryUrls = {
  CategoryUrls: [
      {
        url: "https://ca.boohoo.com/search?q=Dresses",
        givenCategory: "Dresses",
        category: "Dresses",
      },
  ],
  Passed,
}
const GetDetailsUrls = {
  DetailsUrls: [
      {
          url: "https://ca.boohoo.com/customer-service",
          givenCategory: "Customer Service",
          category: "General Information",
      }
  ],
  Passed,
}

// Site Deconstruction 
const SitePaths = {
  GetPossibleImageElements,
  GetImageFound,
  GetCardFound,
  Validation,
  FindCardChildren,
  FindChildrenPossible,
  GetCategoryUrls,
  GetDetailsUrls,
}

