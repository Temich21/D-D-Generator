import createModifierRepresentation from "@component/utils/createModifierRepresentation";
import fieldsDefaults, { CharacterListFields } from "./defaultStore";

export enum PossibleAction {
  CharacterClear = "characterClear",
  CharacterNameChange = "characterNameChange",
  CharacterClassAndLevelChange = "characterClassAndLevelChange",
  CharacterBackgroundChange = "characterBackgroundChange",
  CharacterPlayerNameChange = "characterPlayerNameChange",
}

export type ActionType = {
  // TODO: Замени Выпили стринг ваще
  type: PossibleAction | string;
  payload: any;
};

const reducer = (
  state: CharacterListFields,
  action: ActionType
): CharacterListFields => {
  switch (action.type) {
    case PossibleAction.CharacterClear:
      return {
        ...fieldsDefaults,
      };
    case PossibleAction.CharacterNameChange:
      return {
        ...state,
        characterName: action.payload,
      };
    case PossibleAction.CharacterClassAndLevelChange:
      return {
        ...state,
        characterClassAndLevel: action.payload,
      };
    case PossibleAction.CharacterBackgroundChange:
      return {
        ...state,
        characterBackground: action.payload,
      };
    case PossibleAction.CharacterPlayerNameChange:
      return {
        ...state,
        characterPlayerName: action.payload,
      };
    case "characterRaceChange":
      return {
        ...state,
        characterRace: action.payload,
      };
    case "characterAlignmentChange":
      return {
        ...state,
        characterAlignment: action.payload,
      };
    case "characterExperiencePointsChange":
      return {
        ...state,
        characterExperiencePoints: action.payload,
      };
    case "characterStrengthChange":
      return {
        ...state,
        characterStrength: action.payload,
        characterStrengthmod: createModifierRepresentation(action.payload),
      };
    case "characterDexterityChange":
      return {
        ...state,
        characterDexterity: action.payload,
        characterDexteritymod: createModifierRepresentation(action.payload),
      };
    case "characterConstitutionChange":
      return {
        ...state,
        characterConstitution: action.payload,
        characterConstitutionmod: createModifierRepresentation(action.payload),
      };
    case "characterWisdomChange":
      return {
        ...state,
        characterWisdom: action.payload,
        characterWisdommod: createModifierRepresentation(action.payload),
      };
    case "characterIntelligenceChange":
      return {
        ...state,
        characterIntelligence: action.payload,
        characterIntelligencemod: createModifierRepresentation(action.payload),
      };
    case "characterCharismaChange":
      return {
        ...state,
        characterCharisma: action.payload,
        characterCharismamod: createModifierRepresentation(action.payload),
      };
    case "characterProficiencyBonusChange":
      return {
        ...state,
        characterProficiencyBonus: action.payload,
      };
    case "characterStrengthSaveChange":
      return {
        ...state,
        characterStrengthSave: action.payload,
      };
    case "StrengthSaveProfChange":
      return {
        ...state,
        StrengthSaveProf: action.payload,
      };
    case "characterDexteritySaveChange":
      return {
        ...state,
        characterDexteritySave: action.payload,
      };
    case "DexteritySaveProfChange":
      return {
        ...state,
        DexteritySaveProf: action.payload,
      };
    case "characterConstitutionSaveChange":
      return {
        ...state,
        characterConstitutionSave: action.payload,
      };
    case "ConstitutionSaveProfChange":
      return {
        ...state,
        ConstitutionSaveProf: action.payload,
      };
    case "characterWisdomSaveChange":
      return {
        ...state,
        characterWisdomSave: action.payload,
      };
    case "WisdomSaveProfChange":
      return {
        ...state,
        WisdomSaveProf: action.payload,
      };
    case "characterIntelligenceSaveChange":
      return {
        ...state,
        characterIntelligenceSave: action.payload,
      };
    case "IntelligenceSaveProfChange":
      return {
        ...state,
        IntelligenceSaveProf: action.payload,
      };
    case "characterCharismaSaveChange":
      return {
        ...state,
        characterCharismaSave: action.payload,
      };
    case "CharismaSaveProfChange":
      return {
        ...state,
        CharismaSaveProf: action.payload,
      };
    case "characterAcrobaticsSaveChange":
      return {
        ...state,
        characterAcrobaticsSave: action.payload,
      };
    case "AcrobaticsSaveProfChange":
      return {
        ...state,
        AcrobaticsSaveProf: action.payload,
      };
    case "characterAnimalHandlingSaveChange":
      return {
        ...state,
        characterAnimalHandlingSave: action.payload,
      };
    case "AnimalHandlingSaveProfChange":
      return {
        ...state,
        AnimalHandlingSaveProf: action.payload,
      };
    case "characterArcanaSaveChange":
      return {
        ...state,
        characterArcanaSave: action.payload,
      };
    case "ArcanaSaveProfChange":
      return {
        ...state,
        ArcanaSaveProf: action.payload,
      };
    case "characterAthleticsSaveChange":
      return {
        ...state,
        characterAthleticsSave: action.payload,
      };
    case "AthleticsSaveProfChange":
      return {
        ...state,
        AthleticsSaveProf: action.payload,
      };
    case "characterDeceptionSaveChange":
      return {
        ...state,
        characterDeceptionSave: action.payload,
      };
    case "DeceptionSaveProfChange":
      return {
        ...state,
        DeceptionSaveProf: action.payload,
      };
    case "characterHistorySaveChange":
      return {
        ...state,
        characterHistorySave: action.payload,
      };
    case "HistorySaveProfChange":
      return {
        ...state,
        HistorySaveProf: action.payload,
      };
    case "characterInsightSaveChange":
      return {
        ...state,
        characterInsightSave: action.payload,
      };
    case "InsightSaveProfChange":
      return {
        ...state,
        InsightSaveProf: action.payload,
      };
    case "characterIntimidationSaveChange":
      return {
        ...state,
        characterIntimidationSave: action.payload,
      };
    case "IntimidationSaveProfChange":
      return {
        ...state,
        IntimidationSaveProf: action.payload,
      };
    case "characterInvestigationSaveChange":
      return {
        ...state,
        characterInvestigationSave: action.payload,
      };
    case "InvestigationSaveProfChange":
      return {
        ...state,
        InvestigationSaveProf: action.payload,
      };
    case "characterMedicineSaveChange":
      return {
        ...state,
        characterMedicineSave: action.payload,
      };
    case "MedicineSaveProfChange":
      return {
        ...state,
        MedicineSaveProf: action.payload,
      };
    case "characterNatureSaveChange":
      return {
        ...state,
        characterNatureSave: action.payload,
      };
    case "NatureSaveProfChange":
      return {
        ...state,
        NatureSaveProf: action.payload,
      };
    case "characterPerceptionSaveChange":
      return {
        ...state,
        characterPerceptionSave: action.payload,
      };
    case "PerceptionSaveProfChange":
      return {
        ...state,
        PerceptionSaveProf: action.payload,
      };
    case "characterPerformanceSaveChange":
      return {
        ...state,
        characterPerformanceSave: action.payload,
      };
    case "PerformanceSaveProfChange":
      return {
        ...state,
        PerformanceSaveProf: action.payload,
      };
    case "characterPersuasionSaveChange":
      return {
        ...state,
        characterPersuasionSave: action.payload,
      };
    case "PersuasionSaveProfChange":
      return {
        ...state,
        PersuasionSaveProf: action.payload,
      };
    case "characterReligionSaveChange":
      return {
        ...state,
        characterReligionSave: action.payload,
      };
    case "ReligionSaveProfChange":
      return {
        ...state,
        ReligionSaveProf: action.payload,
      };
    case "characterSleightofHandSaveChange":
      return {
        ...state,
        characterSleightofHandSave: action.payload,
      };
    case "SleightofHandSaveProfChange":
      return {
        ...state,
        SleightofHandSaveProf: action.payload,
      };
    case "characterStealthSaveChange":
      return {
        ...state,
        characterStealthSave: action.payload,
      };
    case "StealthSaveProfChange":
      return {
        ...state,
        StealthSaveProf: action.payload,
      };
    case "characterSurvivalSaveChange":
      return {
        ...state,
        characterSurvivalSave: action.payload,
      };
    case "SurvivalSaveProfChange":
      return {
        ...state,
        SurvivalSaveProf: action.payload,
      };
    case "characterPassivePerceptionfChange":
      return {
        ...state,
        characterPassivePerception: action.payload,
      };
    case "characterOtherprofsChange":
      return {
        ...state,
        characterOtherprofs: action.payload,
      };
    case "characterArmorClassChange":
      return {
        ...state,
        characterArmorClass: action.payload,
      };
    case "characterInitiativeChange":
      return {
        ...state,
        characterInitiative: action.payload,
      };
    case "characterSpeedChange":
      return {
        ...state,
        characterSpeed: action.payload,
      };
    case "characterMaxHPChange":
      return {
        ...state,
        characterMaxHP: action.payload,
      };
    case "characterCurrentHPChange":
      return {
        ...state,
        characterCurrentHP: action.payload,
      };
    case "characterTempHPChange":
      return {
        ...state,
        characterTempHP: action.payload,
      };
    case "characterTotalHDChange":
      return {
        ...state,
        characterTotalHD: action.payload,
      };
    case "characterRemainingHDChange":
      return {
        ...state,
        characterRemainingHD: action.payload,
      };
    case "characterdeathSuccess1Change":
      return {
        ...state,
        characterdeathSuccess1: action.payload,
      };
    case "characterdeathSuccess2Change":
      return {
        ...state,
        characterdeathSuccess2: action.payload,
      };
    case "characterdeathSuccess3Change":
      return {
        ...state,
        characterdeathSuccess3: action.payload,
      };
    case "characterDeathFail1Change":
      return {
        ...state,
        characterDeathFail1: action.payload,
      };
    case "characterDeathFail2Change":
      return {
        ...state,
        characterDeathFail2: action.payload,
      };
    case "characterDeathFail3Change":
      return {
        ...state,
        characterDeathFail3: action.payload,
      };
    case "characterAtkName1Change":
      return {
        ...state,
        characterAtkName1: action.payload,
      };
    case "characterAtkbonus1Change":
      return {
        ...state,
        characterAtkbonus1: action.payload,
      };
    case "characterAtkDamage1Change":
      return {
        ...state,
        characterAtkDamage1: action.payload,
      };
    case "characterAtkName2Change":
      return {
        ...state,
        characterAtkName2: action.payload,
      };
    case "characterAtkbonus2Change":
      return {
        ...state,
        characterAtkbonus2: action.payload,
      };
    case "characterAtkDamage2Change":
      return {
        ...state,
        characterAtkDamage2: action.payload,
      };
    case "characterAtkName3Change":
      return {
        ...state,
        characterAtkName3: action.payload,
      };
    case "characterAtkbonus3Change":
      return {
        ...state,
        characterAtkbonus3: action.payload,
      };
    case "characterAtkDamage3Change":
      return {
        ...state,
        characterAtkDamage3: action.payload,
      };
    case "characterCPChange":
      return {
        ...state,
        characterCP: action.payload,
      };
    case "characterSPChange":
      return {
        ...state,
        characterSP: action.payload,
      };
    case "characterEPChange":
      return {
        ...state,
        characterEP: action.payload,
      };
    case "characterGPChange":
      return {
        ...state,
        characterGP: action.payload,
      };
    case "characterPPChange":
      return {
        ...state,
        characterPP: action.payload,
      };
    case "attacksAndSpellCastingChange":
      return {
        ...state,
        attacksAndSpellCasting: action.payload,
      };
    case "characterEquipmentChange":
      return {
        ...state,
        characterEquipment: action.payload,
      };
    case "characterPersonalityChange":
      return {
        ...state,
        characterPersonality: action.payload,
      };
    case "characterIdealsChange":
      return {
        ...state,
        characterIdeals: action.payload,
      };
    case "characterBondsChange":
      return {
        ...state,
        characterBonds: action.payload,
      };
    case "characterFlawsChange":
      return {
        ...state,
        characterFlaws: action.payload,
      };
    case "characterFeaturesChange":
      return {
        ...state,
        characterFeatures: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
