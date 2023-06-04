# nostr_server
You can find my websocket client-side repo here: https://github.com/hikkymouse1007/nostr_protocol

## New Relic installation
- https://docs.newrelic.com/jp/docs/apm/agents/nodejs-agent/hosting-services/nodejs-agent-heroku/
- https://one.newrelic.com/nr1-core/apm-features/overview/Mzk1OTI2MHxBUE18QVBQTElDQVRJT058MTUzOTM3NTEzNg?account=3959260&duration=1800000&filters=%28domain%3D%27APM%27%20AND%20type%3D%27APPLICATION%27%29&state=0d1a4887-f913-3c4c-69af-cde0abc52f1f

## week5
### Architecture
![architecture](https://github.com/hikkymouse1007/nostr_server/assets/54907440/019b745d-cee2-4a8d-a1c3-b863b4454cd8)

- You can connect my server to send some messages:
```
wss://floating-fortress-37708.herokuapp.com/watcher
```

- You can access /watcher to see all the event sent to this server
https://floating-fortress-37708.herokuapp.com/watcher
<img width="828" alt="スクリーンショット 2023-06-04 22 58 31" src="https://github.com/hikkymouse1007/nostr_server/assets/54907440/17810bc7-3420-4083-a8a0-0f70b6eddc45">

- I installed New Relic on my relay server deployed on Heroku
<img width="863" alt="スクリーンショット 2023-06-04 23 00 35" src="https://github.com/hikkymouse1007/nostr_server/assets/54907440/8b9b9279-9869-4003-84fb-b1f015b0c36e">

### The 3 metrics I chose:(rather I have no choice to choose these due to the limitation of the heroku cheapest plan)
- Throughput
For performance optimization
- Error rate
To find the causes of the error(due to my application code or other reasons)
- Logs
Trouble shooting and security
### The 2 metrics I should have chosen if I could:
- Memory Usage
Resource optimization and performance analysis
- Response Time
For user experience and performance optimization

