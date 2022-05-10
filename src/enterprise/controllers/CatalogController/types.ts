export interface Catalog {
  enterpriseId : string
  name: string
  image: string
  description: string
  price: number
  hasOffer?: boolean
  offerDiscountPercentage?: number
  avaliable?: boolean
}