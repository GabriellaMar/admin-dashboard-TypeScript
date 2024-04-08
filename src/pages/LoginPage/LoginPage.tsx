import { Header } from "../../components/Header/Header";
import logo from '../../assets/logo.png'
import smallPill from '../../assets/white-round-pill.png'
import styles from './LoginPage.module.scss'
import { Container } from "../../components/Container/Container";

const LoginPage: React.FC = () => {

    return (
     < Container>
        {/* <Header />  */}
        <main>
          <img src={logo} alt='Logo image'/>
          <div className={styles.wrapper}>
          <h1 className={styles.tittle}>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us</h1>
          <img className={styles.loginPageImg} src={smallPill} alt="white pill"/>
          </div>
          <div>
            <form className={styles.form}>
              <input className={styles.loginInput}
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              />
              <input className={styles.loginInput}
              type="password" 
              placeholder="Enter your password"
              autoComplete="off"
              
              />
              <button>Log in</button>
            </form>
          </div>
        </main>
        </Container>
    )
  }
  
  export default LoginPage;