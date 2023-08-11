import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToggleProvider } from "../context/toggleContext";

export function BrunnerPage() {
    return (
        <ToggleProvider>
            <Navbar/>
            <iframe src="/runner/index.html" width="100%" height="300"/>
            <Footer/>
        </ToggleProvider>
    )
}