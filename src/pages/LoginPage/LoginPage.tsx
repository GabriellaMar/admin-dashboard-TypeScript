
import logo from '../../assets/logo.png'
import smallPill from '../../assets/white-round-pill.png'
import bigPill from '../../assets/big-white-round-pill.png'
import styles from './LoginPage.module.scss'
import { Container } from "../../components/Container/Container";
import { LoginForm } from "../../components/LoginPage/LoginForm/LoginForm";
import useMediaQuery from '../../hooks/useMediaQuery';



const LoginPage: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

    return (
     < Container>
        {/* <Header />  */}
        <main >
          <img className={styles.logoImg} src={logo} alt='Logo image'/>
          <div className={styles.loginPageWrapper}>
          <div className={styles.wrapper}>
          <h1 className={styles.tittle}>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us</h1>
          <img className={styles.loginPageImg} src={isAboveMediumScreens ? bigPill : smallPill} alt="white pill"/>
          </div>
          <LoginForm />
          </div>
          {/* <div>
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
          </div> */}
        </main>
        </Container>
    )
  }
  
  export default LoginPage;