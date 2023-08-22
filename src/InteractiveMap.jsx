import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS
import Swal from 'sweetalert2';
import axios from 'axios';

import thaiBoundaryGeoJSON from './thailand.json'; // GeoJSON data for Thailand's boundary

const InteractiveMap = () => {
  const handleProvinceClick = (e) => {
    const provinceNameEN = e.target.feature.properties.name;
    // const provinceNameEN = e.target.feature.properties.NAME_1;
    //Swal.fire(`Clicked province: ${provinceName}`);
    Swal.fire({
      icon: 'info',
      html: `${provinceNameEN}`
    });
    setInfomation(provinceNameEN);
  };

  function toastLoading(msg) {
    Swal.fire({
      imageUrl: "https://media.tenor.com/Dkgk2GFVYl4AAAAd/rotate-bocchers.gif",
      imageWidth: 150,
      text: msg,
      position: "center",
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  }

  async function getRamdomData() {
    toastLoading('รอแปบนะพี่ หนูไม่เร่งงานหรอก ว่าแต่พี่ทำงานอะไรหรอ เหนื่อยไหมคะ อายุเท่าไร 23? ไม่เชื่อหรอกพี่ ดูบัตรชาชนได้ไหม');
    var int = Math.floor(Math.random() * 100);
    try {
      const url = `https://jsonplaceholder.org/posts/${int}`;
      console.log(url);
      const response = await axios.get(url);
      return '[' + JSON.stringify(response.data) + ']';
    } catch (error) {
      console.log(error);
      return '[]'; // Return an empty array as a fallback
    }
  }

  async function setInfomation(data) {
    try {
      const dataFromAPI = JSON.parse(await getRamdomData())[0];
      console.log(dataFromAPI);
      await new Promise(r => setTimeout(r, 500));
      document.getElementById('nameOfProvince').innerHTML = data;
      document.getElementById('title').innerHTML = dataFromAPI.title;
      document.getElementById('content').innerHTML = dataFromAPI.content;
      document.getElementById('publishedAt').innerHTML = 'Published : ' + dataFromAPI.publishedAt;
      document.getElementById('updatedAt').innerHTML = 'Updated : ' + dataFromAPI.updatedAt;
      document.getElementById('image_1').setAttribute('src', dataFromAPI.image);
      document.getElementById('remark').innerHTML = 'It just ramdom data, just let you know...';
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      Swal.close();
    }, 500);
  }



  return (
    <MapContainer
      center={[13.75, 100.5]}
      zoom={6}
      minZoom={6}
      style={{ width: '100%', height: '100dvh' }}
      maxBounds={[[5.5 - 1, 97.5 - 1],
      [20.5 + 1, 105.5 + 1]]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={thaiBoundaryGeoJSON}
        style={{ color: 'rgba(14,116,184,1)' }}
        onEachFeature={(feature, layer) => {
          layer.on({
            click: handleProvinceClick
          });
        }}
      />
    </MapContainer>
  );
};

export default InteractiveMap;
