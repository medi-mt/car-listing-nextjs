import styles from "./layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <h2>BOTOCAR</h2>
                <p>Choose and Buy your car</p>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <a href="https://botostart.ir" target="_blank">
                    Botostart
                </a>{" "}
                Next.js courses | BotoCar Project &copy;
            </footer>
        </>
    )
}

export default Layout