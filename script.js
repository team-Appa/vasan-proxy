import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 200,
  duration: '300s'
};

export default function() {
  var rand = Math.floor(Math.random() * 9999999)
  http.get(`http://localhost:3010/api/products?id=${rand}`);
}