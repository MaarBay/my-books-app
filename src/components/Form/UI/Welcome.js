import classes from "./Welcome.module.css";

const Welcome = ({value}) => {
 
  return (
    <div className={classes.home}>
      <h1>Hello {value.charAt(0).toUpperCase() + value.slice(1)}, happy to see you back!</h1>
    </div>
  );
};

export default Welcome;
