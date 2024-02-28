
import { reactive } from 'vue'

export const store = reactive({
  items: [],
  insertItem(item){
    this.items.push(item)
  }
})
export const state = reactive({
  count: 0
})