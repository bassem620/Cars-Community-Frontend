import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import BookAppointment from './pages/BookAppointment';
import CarRepairs from './pages/CarRepairs';
import Compare from './pages/Compare';
import Events from './pages/Events';
import EventInfo from './pages/EventInfo';
import ItemView from './pages/ItemView';
import News from './pages/News';
import NewsInfo from './pages/NewsInfo';
import Footer from './components/Footer';

function App() {
    return (
        <>
        {/* Nav */}
        <Nav />
        {/* Routes */}
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/search" element={<Search />}/>
            <Route path="/book-appointment" element={<BookAppointment />}/>
            <Route path="/car-repair" element={<CarRepairs />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventInfo />} />
            <Route path="/item/:id" element={<ItemView />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsInfo />} />
        </Routes>
        {/* Footer */}
        <Footer />
        </>
    );
}

export default App;
