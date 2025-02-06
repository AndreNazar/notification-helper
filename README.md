# Notification Helper
Это шаблон для быстрого добавления в проект уведомлений.

Здесь уже описаны анимации, поэтому можно не тратить много времени на их создание. 

## Начать использование
Загрузить класс `NotificationHelper.ts`.

Из `index.html` взять полностью div с классом `notif-helper` и перенести в проект.

Из `style.scss` взять стили для класса `notif-helper` и перенести в проект.

В рабочем TS-файле объявить экземпляр:
```typescript
const notifHelper: HTMLElement | null = document.querySelector(".notif-helper")
const nh = new NotificationHelper(notifHelper!)
nh.showInfo("Информационное уведомление. Чтобы закрыть, нажмите на крестик.")
```

### Доступные функции
- `.showInfo("Сообщение")` - показать информационное уведомление.
- `.showError("Сообщение")` - показать уведомление об ошибке.
- `.showSuccess("Сообщение")` - показать успешное уведомление.
- `.showWarning("Сообщение")` - показать предупреждающее уведомление.

## Демо
Github Pages: https://andrenazar.github.io/notification-helper/
