export function Middle() {
  return (
    <div className="middle-part">
      <div className="middle1">
        <h5>My Todos</h5>
      </div>
      <div>
        <h5 className="middle2">Status Filter : </h5>
      </div>
      <div>
        <div class="btn-group">
          <button type="button" class="btn btn-danger">
            All
          </button>
          <button
            type="button"
            class="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"></hr>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
