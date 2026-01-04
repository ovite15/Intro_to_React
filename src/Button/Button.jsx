// Modules css style

// import styles from "./Button.module.css"


function Button(){

    // inline css styles
    const styles = {
        backgroundColor: "aquamarine",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        // <button className={styles.button}>Click Me</button>
        <button style={styles}>Click Me</button>

    );
}

export default Button