import NotificationHelper from "./NotificationHelper"
import "./style.scss"

const notifHelper: HTMLElement | null = document.querySelector(".notif-helper")
const btnInfo: HTMLElement | null = document.querySelector(".btn-info")
const btnError: HTMLElement | null = document.querySelector(".btn-error")
const btnWarning: HTMLElement | null = document.querySelector(".btn-warning")
const btnSuccess: HTMLElement | null = document.querySelector(".btn-success")

btnInfo!.addEventListener("click", () => {
  const nh = new NotificationHelper(notifHelper!)
  nh.showInfo("Информационное уведомление. Чтобы закрыть, нажмите на крестик.")
})
btnError!.addEventListener("click", () => {
  const nh = new NotificationHelper(notifHelper!)
  nh.showError("Сообщение об ошибке! Чтобы закрыть, нажмите на крестик.")
})
btnWarning!.addEventListener("click", () => {
  const nh = new NotificationHelper(notifHelper!)
  nh.showWarning("Предупреждающее уведомление. Чтобы закрыть, нажмите на крестик.")
})
btnSuccess!.addEventListener("click", () => {
  const nh = new NotificationHelper(notifHelper!)
  nh.showSuccess("Всё получилось! Чтобы закрыть, нажмите на крестик.")
})
