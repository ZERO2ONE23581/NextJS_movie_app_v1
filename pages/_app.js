import NavBar from "../components/NavBar";

//global css를 쓸때는 반드시 _app.js파일에서 import 하도록 한다!
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        a {
          color: white;
          padding: 5px;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
