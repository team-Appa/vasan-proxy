Script:

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

Results:

    data_received..............: 345 MB 1.2 MB/s
    data_sent..................: 82 MB  274 kB/s
    http_req_blocked...........: avg=2.13µs  min=0s      med=1µs     max=9.3ms    p(90)=2µs     p(95)=3µs
    http_req_connecting........: avg=232ns   min=0s      med=0s      max=2.08ms   p(90)=0s      p(95)=0s
    http_req_duration..........: avg=75.04ms min=13.78ms med=67.49ms max=516.91ms p(90)=98.97ms p(95)=117.73ms
    http_req_receiving.........: avg=27.7µs  min=12µs    med=23µs    max=14.09ms  p(90)=41µs    p(95)=51µs
    http_req_sending...........: avg=10.94µs min=4µs     med=9µs     max=9.29ms   p(90)=15µs    p(95)=18µs
    http_req_tls_handshaking...: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s
    http_req_waiting...........: avg=75ms    min=13.67ms med=67.46ms max=516.86ms p(90)=98.92ms p(95)=117.69ms
    http_reqs..................: 799015 2662.208856/s
    iteration_duration.........: avg=75.09ms min=15ms    med=67.54ms max=516.98ms p(90)=99.03ms p(95)=117.8ms
    iterations.................: 799015 2662.208856/s
    vus........................: 200    min=200 max=200
    vus_max....................: 200    min=200 max=200