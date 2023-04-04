import "./loading.css"

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="loading">
            <div>
                <div className="c1"></div>
                <div className="c2"></div>
                <div className="c3"></div>
                <div className="c4"></div>
            </div>
            <span>Loading...</span>
        </div>

    )
  }