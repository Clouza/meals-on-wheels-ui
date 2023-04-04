const Locale = () => {
    return (
        <ul className="absolute bg-white top-1/3 w-52 px-4 py-3 rounded-md shadow-sm">
            <li className="py-2" onClick={() => { sessionStorage.setItem("locale", "en"); sessionStorage.setItem('language', 'English'); window.location.reload(); }}>English</li>
            <li className="py-2" onClick={() => { sessionStorage.setItem("locale", "id"); sessionStorage.setItem('language', 'Indonesia'); window.location.reload(); }}>Indonesia</li>
            <li className="py-2" onClick={() => { sessionStorage.setItem("locale", "ph"); sessionStorage.setItem('language', 'Philippines'); window.location.reload(); }}>Philippines</li>
        </ul>
    );
}

export default Locale;