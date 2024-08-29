import { useState } from 'react'
import './assets/css/main.css';
import './assets/css/message.css';
import MessageHistory from "./components/MessageHistory";
import {MessageHistoryTypes} from "./modules/MessageHistoryTypes";

function App() {
  let messages:MessageHistoryTypes[] = [{
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?'
  }, {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }, {
    id: 'chat-5-1092',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:14',
    text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  }, {
    id: 'chat-5-1093',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:20',
    text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.'
  }, {
    id: 'chat-5-1094',
    from: { name: 'Виктор' },
    type: 'typing',
    time: '10:31'
  }];

  return (
    <>
      <div className="container">
        <div className="users">
          <form action="#" className="users_header">
            <input type="search" placeholder="Search"/>
          </form>
          <div className="users_list">
            <div className="user_list_item">
              <img src="./src/assets/img/Victor.jpg" alt="Виктор"/>
              <div className="user_list_item_info">
                Виктор Иванов
                <span>
                  <i className="fa fa-circle me"></i> в сети
                </span>
              </div>
            </div>
            <div className="user_list_item offline">
              <img src="./src/assets/img/Andrey.jpg" alt="Андрей"/>
              <div className="user_list_item_info">
                Андрей гагарин
                <span>
                  <i className="fa fa-circle me"></i> был 7 минут назад
                </span>
              </div>
            </div>
            <div className="user_list_item">
              <img src="./src/assets/img/Mihail.jpg" alt="Михаил"/>
              <div className="user_list_item_info">
                Михаил Толмачев
                <span>
                  <i className="fa fa-circle me"></i> в сети
                </span>
              </div>
            </div>
            <div className="user_list_item">
              <img src="./src/assets/img/Nastya.jpg" alt="Настя"/>
              <div className="user_list_item_info">
                Настя Ушакова
                <span>
                  <i className="fa fa-circle me"></i> в сети
                </span>
              </div>
            </div>
            <div className="user_list_item">
              <img src="./src/assets/img/Evgeniya.jpg" alt="Евгения"/>
              <div className="user_list_item_info">
                Евгения Барышникова
                <span>
                  <i className="fa fa-circle me"></i> в сети
                </span>
              </div>
            </div>
            <div className="user_list_item offline">
              <img src="./src/assets/img/Tomara.jpg" alt="Томара"/>
              <div className="user_list_item_info">
                Томара Плотникова
                <span>
                  <i className="fa fa-circle me"></i> была 30 минут назад
                </span>
              </div>
            </div>
            <div className="user_list_item offline">
              <img src="./src/assets/img/Kiril.jpg" alt="Кирилл"/>
              <div className="user_list_item_info">
                Кирилл Аникеев
                <span>
                  <i className="fa fa-circle me"></i> был 10 часов назад
                </span>
              </div>
            </div>
            <div className="user_list_item">
              <img src="./src/assets/img/Marina.jpg" alt="Марина"/>
              <div className="user_list_item_info">
                Марина Пух
                <span>
                  <i className="fa fa-circle me"></i> в сети
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="user_chat">
          <div className="user_info">
            <img src="./src/assets/img/Victor.jpg" alt="Виктор"/>
            <div className="user_info__text">
              Чат с Виктором Ивановым
              <span>1 903 сообщений</span>
            </div>
            <i className="fa-solid fa-star"></i>
          </div>
          <MessageHistory list={messages} />
        </div>
      </div>
    </>
  )
}

export default App;
