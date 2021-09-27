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

const Worker = {
    Notifications,
    Shift,
    HrsWorked,
    Accuracy,
    Stores,
    Errorlogs,
    ProblemsFaced,
    AverageTimePerStore,
    AverageDeliverySpeed,
    AverageStoresCompletedPerShift,
    Device,
    Monitors,
    OperatingSystem,
    TimeZone,
    CommunicationRating,
    FluentLanguages,
}