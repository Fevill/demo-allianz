export enum TOP_BAR_ACTION {
    CANCEL,
    CLOSE,
    EDIT,
    SAVE
}
export const ICONS = [
    {
        action: TOP_BAR_ACTION.CANCEL,
        icon: "trash-o",
        label:"Annuler"
      },
      {
        action: TOP_BAR_ACTION.EDIT,
        icon: "edit",
        label:"Modifier"
      },
      {
        action: TOP_BAR_ACTION.SAVE,
        icon: "save",
        label:"Sauvegarder"
      },
      {
        action: TOP_BAR_ACTION.CLOSE,
        icon: "close",
        label:"Fermer"
      }
]

