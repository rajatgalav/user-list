function ParentContainer ({children}) {
    return (
        <div className="register-container">
            <div className="image-container">
                <img src="/wallpaper.png" alt="wallpaper" />
            </div>
            {children}
        </div>
    )
}

export default ParentContainer