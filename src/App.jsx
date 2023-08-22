import React from 'react';
import InteractiveMap from './InteractiveMap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid p-0'>
        <div className="row gx-0 gy-0">
          <div className='col-lg-6 overflow-auto'>
            <InteractiveMap className='w-100 h-100' />
          </div>
          <div className='col-lg-6'>
            <div className='card w-100 h-100 rounded-0'>
              {/* <div className='card-header'>ข้อมูล</div> */}
              <div className='card-body overflow-auto' style={{ maxHeight: "100dvh" }} >
                <h3 className='fw-bold' id='nameOfProvince'>8 ปีที่ก็ผ่านมาอาจเป็นสิ่งมุติเช่นกัน เพราะประเทศเทยมีรัฐบวมแต่ก็เหมือนไม่มี</h3>
                <hr />
                <h5 id='title'>Feel free to click on maps...</h5>
                <p id='content'></p>
                <div className='w-100 text-center'>
                  <img className='img-fluid' id='image_1' src="" alt="" />
                </div>
                <p className='text-muted mt-5' id='remark'></p>
                <a href="https://github.com/armsiwadol69/ncaMaps" target='_blank'>Open Github's Repository</a>
              </div>
              <div className='card-footer'>
                {/* document.getElementById('publishedAt').innerHTML = dataFromAPI.publishedAt;
            document.getElementById('updatedAt').innerHTML = dataFromAPI.updatedAt; */}
                <span id='publishedAt'></span> <span id='updatedAt'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
