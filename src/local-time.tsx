import moment from "moment";

interface Sunset {
  imageUrl: string;
  countdown: () => string;
}

function getLocalTime(): moment.Moment & { sunset: () => Sunset } {
  // Get the user's current time and convert it to the user's local time
  const currentTime = moment.utc();
  const localTime = currentTime.local();

  // Add a sunset method to the local time object
  localTime.sunSet = () => getSunset(localTime);

  return localTime;
}

function getSunset(localTime: moment.Moment): Sunset {
  // Calculate the time of sunset for the user's current location
  const sunsetTime = localTime.clone().endOf("day");

  // Determine the URL of the sunset image to use
  const imageUrl = "https://cdn.vectorstock.com/i/1000x1000/77/16/a-tropical-sunset-with-palm-trees-vector-28707716.webp";

  // Create a countdown string showing the time remaining until sunset
  const countdown = () => {
    const now = moment();
    const duration = moment.duration(sunsetTime.diff(now));
    const hours = duration.hours();
    const minutes = duration.minutes();

    return `${hours} hours, ${minutes} minutes until sunset`;
  };

  return {
    imageUrl,
    countdown
  };
}

export { getLocalTime };
