
// ----------------------------------------------------- STORE PROVIDED INFORMATION ---------------------------------------------------

// online index of a store/brand
const OnlineBrandIndex = {
    // name of the brand
    BrandName,
    // sample link
    BrandUrl,
    // OneSidedMarketplace || TwoSidedMarketPlace || Designer || Collection || Brand || Resell || Wholesale || SubBrand,
    BrandClassification, 
    // screen capture
    SampleBrandScreenshot,
}

//in store 
const InStoreBrandIndex = {
    BrandName,
    // store physical address
    StoreLocations: [
        {
        // outside store 
        StoreFrontPicture,
        // inside store
        StoreFloorPicture,
        // location
        Address,
        },
    ],
}

// social media presence of the brand
const BrandSocial = {
    BrandName,
    OnlineBrandIndex,
    InStoreBrandIndex,
    SocialMedia: [
        {
            handle,
            platform, 
            following,
            followers,
            engagament,
            screenshot,
            bio,
            contactinfo,
        }
    ]
}

// logisitcs as described by the brand
const BrandLogistics = {
    Shipping: {
        Link,
        DeliveryOptions: [
            {
                TimeToDelivery,
                Cost,
                Tracking,
                Courrier,
                // clerance, no returns, min spend
                SpecialCondition,
                MinCart,
                MaxCart,
                // taxes and duties, weight/limit
                AdditionalCostExplanation,
            }
        ],
    },
    Returns: {
        Exchange: {
            DaysToReturn,
            // in store, prepaid, mail, pick courrier, print label
            Methods,
            Exchange,
            // free exchanges
            ExchangeExplanation,
        },
        Return: {
            DaysToReturn,
            PaybackTime,
            Cost,
            // in store, prepaid, mail, pick courrier, print label
            Methods,
            Refund: {
                StoreCredit,
                PartialRefund,
                // we refund you minus shippin gor shelving cost,
                PartialRefundExplanation,
                FullRefund,
                Link,
            },

        }
    }

}

// glance at who the store caters too
const BrandAudience = {
    Genders,
    SpecialSizes,
    BrandName,
    Countries,
    PriceRange,
    Style,
    ClothingCategories,
    Aesthetics,
    Age,
}

// Uploaded SizingSpecs
const BrandSizeCharts = {
    BrandName,
    ClothingCategories,
    ClothingLine,
    SpecialSizes,
    ChartImage,
    ChartLink,
}

// break down of store size offerings
const StoreBrandSize = {
    BrandSizeCharts,
    SizeName,
    Min,
    Max,
    Reliability, // Size Confidence score
    DateFound,
    LastUpdated,
    Shopped: [
        UserProfiles,
    ]
}

// Owner verifications
const Owner = {
    DomainEmail,
    Domain,
    Cell,
    Billing,
    Subscription,
    // Id's for the following
    // StoreIndex,
    // BrandIndex,
    // BrandSocial,
}

// worker on the owner side
const Employee = { 
    Name,
    // website, manufacturing, designing, marketing, affiliate, social media
    Role,
    Permissions: [],
}


// ----------------------------------------------------- STORE DYNAMIC INFORMATION ---------------------------------------------------

// inventory
const BrandInventory = {
    BrandIndex,
    Schedules: {
        SiteChange,
        SitePathsChange,
        SiteInventoryChange,
        ClothingSizesChange,
        ManufacturerChange,
    },
    InventoryOptions: [{
        CategoryGiven, // defined by the store
        Category, // defined by us
        CategoryURL, // link to teh category
        Items, // array that represent the [page]
        InventoryPageVolume, // how many items on page
        ItemsMissed, // images per item x images per page x cards per page 
    },]
}

// Site Path Simplified breakdown
const SimpleSitePaths = {
    MainImage: [{
        ImageClass,
        ImagePath,
    }],
    Card: [{
        CardClass,
        CardPath,
    }],
    // Paths for getting a product card creation
    NormalizedCard: {
        Title,
        Price,
        PreviousPrice,
        PrimaryImage,
        SecondaryImages: [Url,],
        Colors,
        Details, // additional text found and not described above
    }

}

// Card to present to users
const ProductCard = {
    Title,
    Price,
    PreviousPrice,
    PrimaryImage,
    SecondaryImages: [Url,],
    Colors,
    Details,
    ProductLink,
    MonetizedLink,
    MetaData, // received from url of product
    AvaiableMeasurements: {
        BodyPart,
        Min,
        Max
    },
}

// Card enrichment information for search and fit matching
const ProductEnrichments = {
    Category, // PREDICTED OR MANUAL
    Style, // Predicted or Manual
    SizesAvailable, // Manual or Scraped or Predicted 
    Fit: [{
        BodyPart, // computer vision or manual
        IntendedFit, // based on garment
    }],
    Coverage: [{
        BodyPart,
        Coverage,
    }],
    Attributes: [{
        SpecialAttribute, //cold shoulder, v-neck, embroidery
    },]
}

const InventoryAccess = {
    ResourceGetter, // Scraper, ThirdParty, Brand
    Files, // Images, CSV, Json, JS Objects
    Variables,// 
}

 // ------------------------------------------------------------- REVIEWS & RATINGS -----------------------------------------------------

 const BrandConfidence = {
    Sizing,
    ClothingDescriptions,
    CategoryClassification,
    Logistics,
    ImageRepresentation, // reality vs expectations
    GarmentQuality,
 }

 // ideally proof of purchase or try on is needed for reviews
 const ProductRatings = {
    Url,
    ProductID,
    ProductCard,
    Reviewer: {
        UserProfile,
        SearchMade,
        Rating,
        Pictures,
        ReturnStatus,
        DateMade,
        DateFound,
        DateBought,
        GivenRating,
        Concerns,
        Feedback,
    },
    GlobalAverageRating,
 }

 // ------------------------------------------------------------- Monetization -----------------------------------------------------

 const BrandMonetization = {
     Billing,
     Affiliation: [
         {
             Platform,
             Commission,
             Click,
             Lead,
             CookiePeriod,
             Policy,
             Contract,
             PayPeriod,
         },
     ]
 }