

// size charts

// public reviews

// historical user reviews (our platform)

// apis

// monetization 

// contact 

// techinical access

// analytics 

// scrape ease

// inventory 

// logistics

// audiences 

// history 

// back end platforms

// ----------------------------------------------------- STORE PROVIDED INFORMATION ---------------------------------------------------
// complete as much as possible
// Retailers should ideally share this information


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

const InStoreBrandIndex = {
    BrandName,
    // outside store 
    StoreFrontPicture,
    // inside store
    StoreFloorPicture,
    // store physical address
    StoreLocation,
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
    Samples: {
        Category,
        CategoryURL,
        SampleItems,
        InventoryPageVolume,
        Style,
    }
}

// break down of store size offerings
const StoreBrandSize = {
    BrandName,
    ClothingCategories,
    SpecialSizes,
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
  
