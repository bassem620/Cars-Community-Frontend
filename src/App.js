import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import BookAppointment from './pages/BookAppointment';
import Compare from './pages/Compare';
import Events from './pages/Events';
import EventInfo from './pages/EventInfo';
import CarView from './pages/CarView';
import News from './pages/News';
import Footer from './components/Footer';

function App() {
    return (
        <>
        {/* Nav */}
        <Nav />
        {/* Routes */}
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/search" element={<Search />}/>
            <Route path="/book-appointment" element={<BookAppointment />}/>
            <Route path="/compare" element={<Compare />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventInfo />} />
            <Route path="/cars/:id" element={<CarView />} />
            <Route path="/news" element={<News />} />
        </Routes>
        {/* Footer */}
        <Footer />
        </>
    );
}

export default App;
