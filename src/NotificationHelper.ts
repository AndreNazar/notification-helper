class NotificationHelper {
  private notifHelper: HTMLElement
  private timer: number
  constructor(_notifHelper: HTMLElement) {
    this.notifHelper = _notifHelper
    this.timer = 0
  }

  private createNotifElement(type: string) {
    const notifList: HTMLElement | null = this.notifHelper.querySelector(".notif-list")
    let notifItem: HTMLElement | null = document.createElement("div")
    notifItem.classList.add("notif-item", `notif-${type}`)
    notifItem.innerHTML = `<div class="notif-close">
        <div class="line"></div>
        <div class="line"></div>
    </div>`

    notifItem.addEventListener("click", (e) => {
      clearTimeout(this.timer)
      notifItem.style.transform = "translateX(100%)"
      notifItem.style.opacity = "0"
      setTimeout(() => {
        notifItem.remove()
      }, 200)
    })

    notifList!.appendChild(notifItem)
    return notifItem
  }

  private animationBlock(notifItem: HTMLElement) {
    setTimeout(() => {
      notifItem.style.opacity = "1"
      notifItem.style.padding = "1em 1.5em"
      notifItem.style.maxHeight = "500px"
      notifItem.style.transform = "translateX(0)"
    })

    this.timer = setTimeout(() => {
      notifItem.style.opacity = "0"
      notifItem.style.transform = "translateX(100%)"
      setTimeout(() => {
        notifItem.remove()
      }, 200)
    }, 4000)
  }

  public showInfo(message: string) {
    let notifItem: HTMLElement = this.createNotifElement("info")
    notifItem.innerHTML += `<p>Информация: ${message}</p>`
    this.animationBlock(notifItem)
  }
  public showError(message: string) {
    let notifItem: HTMLElement = this.createNotifElement("error")
    notifItem.innerHTML += `<p>Ошибка: ${message}</p>`
    this.animationBlock(notifItem)
  }
  public showSuccess(message: string) {
    let notifItem: HTMLElement = this.createNotifElement("success")
    notifItem.innerHTML += `<p>Успешно: ${message}</p>`
    this.animationBlock(notifItem)
  }
  public showWarning(message: string) {
    let notifItem: HTMLElement = this.createNotifElement("warning")
    notifItem.innerHTML += `<p>Предупреждение: ${message}</p>`
    this.animationBlock(notifItem)
  }
}

export default NotificationHelper
