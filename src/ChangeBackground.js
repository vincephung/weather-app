const ChangeBackground = (props) => {
  let weatherDescription = props.data.weather[0].main;

  let body = document.body;
  switch (weatherDescription) {
    case 'Clear':
      body.style.background =
        "url('https://images.financialexpress.com/2020/04/sky660.jpg') no-repeat";
      body.style.backgroundSize = 'cover';
      break;
    case 'Clouds':
      body.style.background =
        "url('https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=1') no-repeat";
      body.style.backgroundSize = 'cover';
      break;
    case 'Drizzle':
    case 'Rain':
      body.style.background =
        "url('https://i.ytimg.com/vi/Q1GTZ6JSSFk/maxresdefault.jpg') no-repeat";
      body.style.backgroundSize = 'cover';
      break;
    case 'Thunderstorm':
      body.style.background =
        "url('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb') no-repeat";
      body.style.backgroundSize = 'cover';
      break;
    case 'Snow':
      body.style.background =
        "url('https://i.pinimg.com/originals/71/f7/ed/71f7ed7f43b268b4507d7bb8dee672e1.jpg') no-repeat";
      body.style.backgroundSize = 'cover';
      break;
    case 'Mist':
      body.style.background =
        "url('https://ak.picdn.net/shutterstock/videos/19585312/thumb/1.jpg') no-repeat";
      body.style.backgroundSize = 'cover';
      break;
    default:
      break;
  }
  return null;
};

export default ChangeBackground;
