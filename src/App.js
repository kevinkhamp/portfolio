import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

function App() {
    [load, updateLoad] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Router>
            <Preloader load={load} />
            <div className='App' id={load ? 'no-scroll' : 'scroll'}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App