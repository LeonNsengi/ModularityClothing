// ----------------------------------------------------- USER PROFILE DATA ---------------------------------------------------

// clothing targeted gender
  const Sexe = {
    Womens,
    Mens,
    Unisex,
  }
  // fast track comparisons with shape names
  const BodyShapes = {
    Triangle,
    Rectangle,
    InvertedTriangle,
    Oval,
    Hourglass,
  }
  
  // compare shoulders to hips to set upper and lower geometric lines
  // use BodyShapeCalculator with calculateShape function
  const BodyshapeCalculator = {
    ShoulderHips: null,
    WaistHips: null,
    BustWaist: null,
    BustHips: null,
    Shape: null,
  
  }
  
  // adjust measurements if the person has smaller curves than regression fit
  // use language that is sensitive and respectful small.. curvy...
  const Curves = {
    Bust,
    Butt,
  }
  
  // how often to send notifications and billing
  const Notifications = {
    Subscription: {
      Subscribed,
      SubscriptionFrequency,
      SubscriptionType,
    },
    Payments: {
      StripeKey,
      StripeID,
    },
    Contact: {
      Email,
      text,
      socialmedia: [{
        handle,
        platform,
      }]
    },
  }
  
  // band size and cup size to adjust bust prediction or recommend bra type clothing categories
  const BraSize = {
    BandSize,
    BustSize
  }
  
  // Body Data
  const Body = {
    Height,
    HeightUnit,
    Weight,
    WeightUnit,
    Bust, // around biggest part of bust
    Waist, // biggest part of stomach
    Hips, // biggest part around hips
    Inseam, // from crotch to ankle
    MeasurementUnit,
  }
  
  // Personal Data
  const UserMeta = {
    // age range or age
    Age,
    // muscle definition, skin tightness,
    ActivityLevel,
    // country, province, state, city ()
    Region,
    // annual income or based on job
    Income,
    // non hispanic, hispanic, non arab, arab, [ east, west, north --> african, asian, european ]
    Ethnicity,
    // months pre and post pregnancy 
    Maternity,
    RelationshipStatus,
    // level of schooling
    Schooling,
    // Student, Office, Labour, ...
    Job,
    //anorexic, skinny, thin, healthy, little overweight, overweight, fat, obese
    WeightDescription,
  
  }
  
  // Sizes a user has bought from brands we have data for
  const UserBrandSizes = {
    // brand we already found. must have a unique country and link
    BrandID,
    // store where brand can be shopped. store can have multiple brands
    StoreID,
    BrandName,
    // upper body, lower body, full
    Coverage,
    // item types
    ClothingCategory,
    // Special Size, 
    SpecialSizes,
    // Last Purchased
    PurchaseDate,
    // Country
    Country,
    SizeName,
    SizeID,
  }
  
  // Sizes a user has bought from brands we have not indexed
  const UserUnknownSizes = {
    BrandLink,
    BrandName,
    ClothingCategory,
    PurchaseDate,
    Country,
    Coverage,
    SizeName,
    SizeID,
  }
  
  // Liked Brands
  const PreferredBrands = {
    BrandName,
    BrandID,
    StoreID,
  }
  
// ----------------------------------------------------- USER PREDICTED/COMPUTED DATA ---------------------------------------------------

const PredictedMeasurements = {
    Bust,
    Waist,
    HighHip,
    Hips,
    Mid_Neck,
    Neck_Base,
    Armscye,
    Upper_Arm,
    Elbow,
    Thigh_Max,
    Thigh_Mid,
    Knee,
    Calf,
    Ankle,
    Center_Trunk,
    Crotch_Length_Total,
    Back_Neck_Point_Height,
    Cervicale_Height,
    Waist_Height,
    High_Hip_Height,
    Hips_Height,
    Crotch_Height,
    Knee_Height,
    Ankle_Height,
    Waist_Length_Front,
    Waist_Length_Back,
    Across_Shoulder,
    Cross_Back_Width,
    Cross_Chest_Width,
    Overarm_Full,
    Coat_Chest_Overarm,
    Shoulder_Length,
    Shoulder_Slope_Arctan,
    Shoulder_Slope_degrees,
    Arm_Length_Shoulder_to_Wrist,
    Arm_Length_CBNeck_to_Wrist,
    Bust_Pt_to_Bust_Pt,
    Neck_to_Bust_Point,
    Scye_Depth,
    Inseam,
}

const PredictedBodyProportions = {
    ShoulderHips,
    WaistHips,
    BustWaist,
    BustHips,
    Shape,
}

const PredictedMeasurementsFromSize = {
    Bust,
    HighWaist,
    LowWaist,
    HighHip,
    LowHip,
    Thighs,
    Arms,
    Shoulders,
    Bra,
    Inseam,
}

const UserConfidenceSet = {
    Shape, 
    BodyProportions,
    BodyMeasurements,
    Tight: {
        TopSize,
        BottomSize,
        FullBodySize,
    },
    Loose: {
        TopSize,
        BottomSize,
        FullBodySize,
    },
    Jusright: {
        TopSize,
        BottomSize,
        FullBodySize,
    },
    // do they only return things when they don't fit or ...
    ClothingReturns,
    // how reliable is their feedback 
    ClothingFitFeedback,
    // do they select the size we recommend
    SizeSelection,
}

const UserConfidenceScores = {

    Given : {
        UserConfidenceSet,
    }, 
    Captured: {
        UserConfidenceSet,
    }, 
    Predicted: {
        UserConfidenceSet,
    },

}

const PriceSensitive = [{
    ClothingCategory,
    AverageSpend,
    BoughtWith,
    AverageUpsellRoom,
}]

// --------------------------------------------------------------------------- NON COMPLEX SHOPPING REQUESTS ---------------------------------------------------------------------------
// the equivalent of core pieces that a user can use to receive a solution

const BasicRequests = {
    // explore all clothing without deep filters
    SpecialSize: {
     ClothingGender,
     SpecialSize,
     },
     // use this to request a specific garment using an image or imagelink
     SpecificPictureItem: {
         Picture,
         Link,
         // position of desired items (single to multiple pins)
         ItemPins,
     },
     // use this to request a specific garment
     SpecificAskedItem: {
         Description,
     },
     // explore a simple item category like you would on a store
     ClothingCategory: {
         CategoryName,
     },
     // search a brand or declare a brand by sharing a name or a link
     Brand = {
         BrandName,
         BrandLink,
     },
     // search using a brands logistics details
     PreferredLogistics: {
       Shipping,
       Returns,
     },
     LocationInput: {
         Country,
         City,
         RegionalCode, // zip, postal, .....
     },
     // share a size with no explicit brand connection
     Size = {
         Sizename,
         // tops, bottoms, jeans, dresses, jumpsuits & rompers 
         GeneralClothingCategory,
     },
     // fast track comparisons with shape names
     Bodyshape: {
         ShapeName,
     },
     // fashion category or lifestyle look
     Style: {
         Occassion,
         Place,
         ClothingStyles
     },
     // colors & patterns on the garment
     Aesthetic: {
         Color,
         Pattern,
     },
     // typical garment issues faced
     Concerns: {
         ConcernSet: [{
           BodyPart,
           Concern,
           FitImprovement,
         }], 
     },
     // lengths specification on different body parts
     Lengths: {
       LengthSet: [{
         BodyPart,
         Coverage,
       }],
     },
     // describe parts of the body you want to accentuate
     Highlight: {
         ShowOffSet: [{
           BodyPart,
           ShowOffMethod,
         }],
     },
     // share people who have an account with us or information made public
     SimilarAccounts: {
       Friend,
       Influencer,
     },
     // select items on users behalf 
     CurrentOptions: {
       Links: [],
       Pictures: [],
     },
       // shop by bra size for tops or sport bras or bras
     BraSize: {
       BraSizeValue,
     },
 }
 
 const AccessAccount = {
   Login: {
     email,
     cell,
     username,
     password,
   },
   SocialMedia: {
     handle,
     channel,
   },
   PhoneNumber: {
     cell,
     code,
   },
   Email: {
     email,
   }
 }
 
// --------------------------------------------------------------------------- USER INPUT CONSTANT DATA PACKS ---------------------------------------------------------------------------
// the equivalent of core pieces that a user can use to receive a solution

// Styles the user might like, new niche styles can be added upon clear differentiation from other groups

const ClothingStyles = [
    {
      stylename: 'Activewear',
      description:
        'For an active lifestyles in the gym, at the park, or on the go.',
      imglink: require('~/assets/imgs/styles/activewear.png'),
    },
    {
      stylename: 'Business',
      description:
        'Get ready for work, meetings, and taking over. Professional clothes for the working woman.',
      imglink: require('~/assets/imgs/styles/business.png'),
    },
    {
      stylename: 'Chic',
      description:
        'When classy is your aim, this is the perfect style to wear. Elegant timesless pieces.',
      imglink: require('~/assets/imgs/styles/chic.png'),
    },
    {
      stylename: 'Ethnic',
      description:
        'From East African to East Asia. Explore styles from or inspited by foreign countries, designers and cultures.',
      imglink: require('~/assets/imgs/styles/ethnic.png'),
    },
    {
      stylename: 'Everyday',
      description:
        'Look good and feel confident everyday whether its for yourself or going out. Simple but stylish.',
      imglink: require('~/assets/imgs/styles/everyday.png'),
    },
    {
      stylename: 'Glamourous',
      description:
        'Let the clothes do the talking everytime you walk into a room. Never shy away from attention.',
      imglink: require('~/assets/imgs/styles/glamourous.png'),
    },
    {
      stylename: 'High End',
      description:
        'When price is no longer an issue, get the best quality from the biggest names. Styles with a story.',
      imglink: require('~/assets/imgs/styles/highend.png'),
    },
    {
      stylename: 'Hipster',
      description:
        'Be you, be different and let your clothes say it too. Whether it is artistic, vintage, or unique pieces.',
      imglink: require('~/assets/imgs/styles/hipster.png'),
    },
    {
      stylename: 'Modest',
      description:
        'Whether is because of religious, cultural, or just personal enjoy being conservative in fashion.',
      imglink: require('~/assets/imgs/styles/modest.png'),
    },
    {
      stylename: 'Semi-Formal',
      description:
        'Clothes that can be formal and also be combined with somthing casual.',
      imglink: require('~/assets/imgs/styles/semiformal.png'),
    },
    {
      stylename: 'Streetwear',
      description: 'You know what this is and if you dont well...',
      imglink: require('~/assets/imgs/styles/streetwear.png'),
    },
    {
      stylename: 'Sustainable',
      description:
        'Ethical fashion, slow fashion, sustainable manufacturing. Your beliefs in your clothes.',
      imglink: require('~/assets/imgs/styles/sustainable.png'),
    },
    {
      stylename: 'Trendy',
      description:
        'Keep up with the lastest looks, be a part of the buzz, and dont miss out on the now.',
      imglink: require('~/assets/imgs/styles/trendy.png'),
    },
    {
      stylename: 'Athleisure',
      description:
        'Show you can be stylish while having your comfort and movement.',
      imglink: require('~/assets/imgs/styles/sporty.png'),
    },
],
// colors and patterns
const Aesthetic = {
    
    Colors: [
        {
          colorName: 'red',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/RED+crop.jpg',
        },
        {
          colorName: 'yellow',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/yellow.jpg',
        },
        {
          colorName: 'blue',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/blue+crop.jpg',
        },
        {
          colorName: 'brown',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/brown.jpg',
        },
        {
          colorName: 'orange',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/orange.jpg',
        },
        {
          colorName: 'green',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/green+crop.jpg',
        },
        {
          colorName: 'violet',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/violet.jpg',
        },
        {
          colorName: 'black',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/black+crop.jpg',
        },
        {
          colorName: 'pink',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/pink+crop.jpg',
        },
        {
          colorName: 'purple',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/purple+crop.jpg',
        },
        {
          colorName: 'white',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/white+crop.jpg',
        },
        {
          colorName: 'gray',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/gray.jpg',
        },
    ],
    Patterns: [
        {
          colorName: 'floral',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/floral+crop.jpg',
        },
        {
          colorName: 'stripes',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/stripes+crop.jpg',
        },
        {
          colorName: 'plaid',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/plaid+crop.jpg',
        },
        {
          colorName: 'graphic print',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/graphic+print.jpg',
        },
        {
          colorName: 'camo',
          colorLink:
            'https://brand-logos-clothingforme-official.s3.amazonaws.com/camo+crop.jpg',
        },
    ],
}
// clothing categories we currently service as they deal with fit and are less complex
const ClothingCategories = [
        {
          item: 'Dresses',
          coverage: 'full',
          images: [
            'full+_coverage_dress_model.png',
            'full_coverage_dress_article.png',
            'full_coverage_dress_article+(1).png',
            'full_coverage_dress_model.png',
          ],
        },
        {
          item: 'Tops',
          coverage: 'tops',
          images: [
            'top_model.png',
            'top_article.png',
            'top_article+(1).png',
            'top_model+(1).png',
          ],
        },
        {
          item: 'Blouses',
          coverage: 'tops',
          images: [
            'blouse_model.png',
            'blouse_article.png',
            'blouse_article+(1).png',
            'blouse_model+(1).png',
          ],
        },
        {
          item: 'Dress Pants & Trousers',
          coverage: 'bottoms',
          images: [
            'trousers_model.png',
            'trousers_article.png',
            'trousers_article+(1).png',
            'trousers_model+(1).png',
          ],
        },
        {
          item: 'Pants & Chinos',
          coverage: 'bottoms',
          images: [
            'chinos_model.png',
            'chinos_article.png',
            'chinos_article+(1).png',
            'chinos_model+(1).png',
          ],
        },
        {
          item: 'Jeans & Denim Pants',
          coverage: 'bottoms',
          images: [
            'jeans_model.png',
            'jeans_article.png',
            'jeans_article+(1).png',
            'jeans_model+(1).png',
          ],
        },
        {
          item: 'Camisoles & Tank Tops',
          coverage: 'tops',
          images: [
            'tanktop_model.png',
            'tanktop_article.png',
            'tank_top_article.png',
            'tank_top_model.png',
          ],
        },
        {
          item: 'Shirts',
          coverage: 'tops',
          images: [
            'shirt_model.png',
            'shirt_article.png',
            'shirt_article+(1).png',
            'shirt_model+(1).png',
          ],
        },
        {
          item: 'Dress Shirts',
          coverage: 'tops',
          images: [
            'dress_shirt_model.png',
            'dress_shirt_article.png',
            'dress_shirt_article+(1).png',
            'dress_shirt_model+(1).png',
          ],
        },
        {
          item: 'Sweaters',
          coverage: 'tops',
          images: [
            'sweater_model.png',
            'sweater_article.png',
            'sweater_article+(1).png',
            'sweater_model+(1).png',
          ],
        },
        {
          item: 'Sweatshirts',
          coverage: 'tops',
          images: [
            'sweatshirt_model.png',
            'sweatshirt_article.png',
            'sweatshirt_article+(1).png',
            'sweatshirt_model+(1).png',
          ],
        },
        {
          item: 'Sweatpants',
          coverage: 'bottoms',
          images: [
            'sweatpants_model.png',
            'sweatpants_article.png',
            'sweatpants_article+(1).png',
            'sweatpants_model+(1).png',
          ],
        },
        {
          item: 'Cardigans',
          coverage: 'tops',
          images: [
            'cardigan_model.png',
            'cardigan_article.png',
            'cardigan_article+(1).png',
            'cardigan_model+(1).png',
          ],
        },
        {
          item: 'Hoodies',
          coverage: 'tops',
          images: [
            'hoodie_model.png',
            'hoodie_article.png',
            'hoodie_article+(1).png',
            'hoodie_model+(1).png',
          ],
        },
        {
          item: 'Gowns',
          coverage: 'full',
          images: [
            'gown_model.png',
            'gown_article.png',
            'gown_article+(1).png',
            'gown_model+(1).png',
          ],
        },
        {
          item: 'Joggers',
          coverage: 'bottoms',
          images: [
            'joggers_model.png',
            'joggers_article.png',
            'joggers_article+(1).png',
            'joggers_model+(1).png',
          ],
        },
        {
          item: 'Jumpsuits',
          coverage: 'full',
          images: [
            'jumpsuit_model.png',
            'jumpsuit_article.png',
            'jumpsuit_article+(1).png',
            'jumpsuit_model+(1).png',
          ],
        },
        {
          item: 'Shorts',
          coverage: 'bottoms',
          images: [
            'shorts_model.png',
            'shorts_article.png',
            'shorts_article+(1).png',
            'shorts_model+(1).png',
          ],
        },
        {
          item: 'Rompers',
          coverage: 'full',
          images: [
            'romper_model+(1).png',
            'romper_article.png',
            'romper_article+(1).png',
            'romper_model+(1).png',
          ],
        },
        {
          item: 'Skirts',
          coverage: 'bottoms',
          images: [
            'skirt_model.png',
            'skirt_article.png',
            'skirt_article+(1).png',
            'skirt_model+(1).png',
          ],
        },
        {
          item: 'Bodysuits',
          coverage: 'tops',
          images: [
            'bodysuit_model.png',
            'bodysuit_article.png',
            'bodysuit_article+(1).png',
            'bodysuit_model+(1).png',
          ],
        },
        {
          item: 'Blazers',
          coverage: 'tops',
          images: [
            'blazer_model.png',
            'blazer_article.png',
            'blazer_article+(1).png',
            'blazer_model+(1).png',
          ],
        },
        {
          item: 'Jackets',
          coverage: 'tops',
          images: [
            'jacket_model.png',
            'jacket_article.png',
            'jacket_article+(1).png',
            'jacket_model+(1).png',
          ],
        },
        {
          item: 'Coats',
          coverage: 'tops',
          images: [
            'coat_model.png',
            'coat_article.png',
            'coat_article+(1).png',
            'coat_model+(1).png',
          ],
        },
        {
          item: 'Leggings & Yoga Pants',
          coverage: 'bottoms',
          images: [
            'leggings_model.png',
            'leggings_article.png',
            'leggings_article+(1).png',
            'leggings_model+(1).png',
          ],
        },
    // We dont service the categories below
    // Leggings: "Leggings & Yoga Pants",
    // Swimwear,
    // Pajamas,
    // Lingerie: "Bras & Underwears",
    // Socks,
    // Scarfs,
    // Tights,
    // Gloves,
    // Shoes,
    // Hats,
    // Bags,
    // Accessories  
]

// key fit issues to address and or account for in prediction of mesurements
const GarmentConcerns = {
  // concernsUpper: [
  //     'Tight On Armpits',
  //     'Long On Arms',
  //     'Short On Arms',
  //     'Tight On Arms',
  //     'Tight On Stomach',
  //     'Short On Stomach',
  //     'Long On Upper Body',
  //     'Tight On Chest',
  //     'None',
  //   ],
  //   concernsFull: [
  //     'Tight On Armpits',
  //     'Long On Arms',
  //     'Short On Arms',
  //     'Tight On Arms',
  //     'Tight On Stomach',
  //     'Long On Legs',
  //     'Short On Legs',
  //     'Tight On Hips',
  //     'None',
  //   ],
  //   concernsLower: [
  //     'Tight On Stomach',
  //     'Long On Legs',
  //     'Short On Legs',
  //     'Tight On Hips',
  //     'Fits Waist But Not Hips',
  //     'Fits Hips But Not Waist',
  //     'Gap at the back of hips',
  //     'None',
  //   ],
  UpperBody: [
          {
              problem: 'Too Tight On Armpits',
              bodyPart: 'arms and bust',
              type: 'fit',
              fit: 'tight',
          },
          {
              problem: 'Too Long On Arms',
              bodyPart: 'arms',
              type: 'length',
              fit: 'long',
          },
          {
              problem: 'Too Short On Arms',
              bodyPart: 'arms',
              type: 'length',
              fit: 'short',
          },
          {
              problem: 'Too Tight On Stomach',
              bodyPart: 'stomach',
              type: 'fit',
              fit: 'tight',
          },
          {
              problem: 'Too Short On Stomach',
              bodyPart: 'torso',
              type: 'length',
              fit: 'short',
          },
          {
              problem: 'Too Long On Upper Body',
              bodyPart: 'torso',
              type: 'length',
              fit: 'long',
          },
          {
              problem: 'Too Tight On Chest',
              bodyPart: 'bust',
              type: 'fit',
              fit: 'tight',
          },
          ],
  LowerBody: [
          {
              problem: 'Too Tight On Stomach',
              bodyPart: 'stomach',
              type: 'fit',
              fit: 'tight',
          },
          {
              problem: 'Too Long On Legs',
              bodyPart: 'legs',
              type: 'length',
              fit: 'long',
          },
          {
              problem: 'Too Short On Legs',
              bodyPart: 'legs',
              type: 'length',
              fit: 'short',
          },
          {
              problem: 'Too Tight On Hips',
              bodyPart: 'hips',
              type: 'fit',
              fit: 'tight',
          },
          {
              problem: 'Fits Waist But Not Hips',
              bodyPart: 'hips',
              type: 'fit',
              fit: 'loose',
          },
          {
              problem: 'Fits Hips But Not Waist',
              bodyPart: 'waist',
              type: 'fit',
              fit: 'loose',
          },
          { problem: 'Loose on Butt', bodyPart: 'butt', type: 'fit', fit: 'loose' },
          ],
}

// apply to per category
const Budget = {      
    Price,
    Currency,
}

// Parts a customer would want to show off
const ShowOff = {
    UpperBody: {
        Neck,
        Shoulders,
        Arms,
        Chest,
        HighWaist: 'High Waist',
        Stomach,
        Back,
    },
    LowerBody: {
        LowWaist: 'Low Waist',
        Hips,
        Butt,
        Thighs,
        Calves,
        Ankles,
    },
    ShowoffFull: [
        'Neck',
        'Shoulders',
        'Arms',
        'Chest',
        'Waist',
        'Stomach',
        'Back',
        'hips',
        'butt',
        'thighs',
        'calves',
        'ankles',
      ],
    ShowoffTop: [
        'Neck',
        'Shoulders',
        'Arms',
        'Chest',
        'Waist',
        'Stomach',
        'Back',
      ],
    ShowoffBottom: [
        'Waist',
        'Stomach',
        'Back',
        'hips',
        'butt',
        'thighs',
        'calves',
        'ankles',
      ],
}

// desired length or can be used to infer person body part lengths and height
const GarmentLengths = {
    Sleeves: {
        Long: 'Long Sleeves',
        Short: 'Short Sleeves',
        None: 'Sleeveless',
    },
    Tops: {
        Bra: "Under bust",
        Crop: 'Down To Waist',
        Belly: 'Belly Button',
        Regular,
        Hips: 'Down To Hips',
        Knees: 'Down To Knees',
        Any,

    },
    Bottoms: {
        HighWaist: 'High Waisted',
        ShortShort: 'Short Short',
        Thighs: 'Down To Thighs',
        Knees: 'Down To Knees',
        Calves: 'Capri Length or 3/4 Length',
        Ankles: 'Down To Ankles',
        Floor: 'Down To Floor',
        Any,
    },
    Full: {
        ShortShort: 'Short Short',
        Thighs: 'Down To Thighs',
        Knees: 'Down To Knees',
        Calves: 'Down To Calves',
        Ankles: 'Down To Ankles',
        Floor: 'Down To Floor',
        Any,
    },   
}

// body shape descriptions for image selection
const ShapeDescriptions = [
    {
      shape: "Lower body is the biggest",
      shapename: "Triangle",
      representation: [],
      description:
        "You carry most of your weight on your lower body. Shoulders are narrower than hips.",
      shapelink: require("./shapes/Triangle.png"),
    },
    {
      shape: "Y",
      shapename: "Rectangle",
      representation: [],
      description:
        "Bust and hips are balanced and almost the same width. With small curves.",
      shapelink: require("./shapes/Rectangle.png"),
    },
    {
      shape: "Stomach is the widest",
      shapename: "Oval",
      representation: [],
      description:
        "Large bust, narrow hips, and a full midsection. Carry weight around your middle.",
      shapelink: require("./shapes/Oval.png"),
    },
    {
      shape: "Upper body is the biggest",
      shapename: "InvertedTriangle",
      representation: [],
      description:
        "Wider shoulders than hips. Bust Bigger than hips. Little definition between waist and hips.",
      shapelink: require("./shapes/InvertedTriangle.png"),
    },
    {
      shape: "Much bigger bust and hips than waist",
      shapename: "Hourglass",
      representation: [],
      description:
        "Shoulders and hips are similar in proportion. Waist is significantly smaller than bust and hips.",
      shapelink: require("./shapes/Hourglass.png"),
    },
],

// --------------------------------------------------------------------------- USER PROFILE INSTANCE ---------------------------------------------------------------------------

// Completed User Profile
const UserProfile = {
    ClothingGender: Sexe,
    BodyShape: BodyShapes,
    BodyPartComparison: BodyshapeCalculator,
    BodyCurves: Curves,
    ContactInfo: Notifications,
    BraGiven: BraSize,
    BodyMeasures: Body,
    UserMetaData: UserMeta,
    LosgisticOptions: PreferredLogistics,
    PredictedMeasurements,
    PredictedBodyProportions,
    PredictedMeasurementsFromSize,
    UserConfidenceScores,
    PriceSensitive,
    Predictions: {
        First: {
            Bust,
            HighWaist,
            LowWaist,
            HighHip,
            LowHip,
            Inseam,
            Shape,
        },
        Historical,
    },
    Shopped: {
        Provided: [{
            ClothingCategory,
            Style,
            StoreBrandSize,
            GarmentFit,
            RetunedStatus,
            PurchasedAgain,
        }],
        Collected: [{
            ClothingCategory,
            Style,
            StoreBrandSize,
            GarmentFit,
            RetunedStatus,
            PurchasedAgain,
            GarmentFit,
            GarmentLengths,
            ShowOff,
            ClothingStyles,
            Price,
            PurchaseDate,
        }],
    },
    History: {
        OptionType,
        Viewed,
        Searched,
        Requested,
        Liked,
    }
    
}