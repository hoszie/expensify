console.log('App is running shithead');

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

function getSubtitle(subtitle) {
  if (subtitle) {
    return <p>{app.subtitle}</p>
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderItemList();

  }
}

const clearOptionsArray = () => {
  app.options = [];
  renderItemList();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};


const renderItemList = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {getSubtitle(app.subtitle)}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={clearOptionsArray}>Remove All</button>
      <ol> 
      {
        app['options'].map((option) => {
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot)
};

const appRoot = document.getElementById('app');

renderItemList();
