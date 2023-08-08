import React from 'react'

function logForm() {
  return (
    <div>
        <form>
            <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </Link>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="#">Action</Link></li>
                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                    <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                </ul>
            </li>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default logForm