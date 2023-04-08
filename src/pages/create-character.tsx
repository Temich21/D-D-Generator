import Head from 'next/head'
import { useRef, useState, useReducer } from 'react'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { BurgerProvider } from './components/Burger-nav/Burger-nav'
import { CharacterSheet } from './components/Dnd-character-sheet/CharacterSheet'
import { ButtonElement } from './components/ButtonElement/ButtonElement'
import { useReactToPrint } from 'react-to-print'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
    })

    const characterObj = {
        characterName: '',
        characterClassAndLevel: '',
        characterBackground: '',
        characterPlayerName: '',
        characterRace: '',
        characterAlignment: '',
        characterExperiencePoints: '',
        characterStrength: '',
        characterStrengthmod: '',
        characterDexterity: '',
        characterDexteritymod: '',
        characterConstitution: '',
        characterConstitutionmod: '',
        characterWisdom: '',
        characterWisdommod: '',
        characterIntelligence: '',
        characterIntelligencemod: '',
        characterCharisma: '',
        characterCharismamod: '',
        characterProficiencyBonus: '',
        characterStrengthSave: '',
        StrengthSaveProf: false,
        characterDexteritySave: '',
        DexteritySaveProf: false,
        characterConstitutionSave: '',
        ConstitutionSaveProf: false,
        characterWisdomSave: '',
        WisdomSaveProf: false,
        characterIntelligenceSave: '',
        IntelligenceSaveProf: false,
        characterCharismaSave: '',
        CharismaSaveProf: false,
        characterAcrobaticsSave: '',
        AcrobaticsSaveProf: false,
        characterAnimalHandlingSave: '',
        AnimalHandlingSaveProf: false,
        characterArcanaSave: '',
        ArcanaSaveProf: false,
        characterAthleticsSave: '',
        AthleticsSaveProf: false,
        characterDeceptionSave: '',
        DeceptionSaveProf: false,
        characterHistorySave: '',
        HistorySaveProf: false,
        characterInsightSave: '',
        InsightSaveProf: false,
        characterIntimidationSave: '',
        IntimidationSaveProf: false,
        characterInvestigationSave: '',
        InvestigationSaveProf: false,
        characterMedicineSave: '',
        MedicineSaveProf: false,
        characterNatureSave: '',
        NatureSaveProf: false,
        characterPerceptionSave: '',
        PerceptionSaveProf: false,
        characterPerformanceSave: '',
        PerformanceSaveProf: false,
        characterPersuasionSave: '',
        PersuasionSaveProf: false,
        characterReligionSave: '',
        ReligionSaveProf: false,
        characterSleightofHandSave: '',
        SleightofHandSaveProf: false,
        characterStealthSave: '',
        StealthSaveProf: false,
        characterSurvivalSave: '',
        SurvivalSaveProf: false,
        characterPassivePerception: '',
        characterOtherprofs: '',
        characterArmorClass: '',
        characterInitiative: '',
        characterSpeed: '',
        characterMaxHP: '',
        characterCurrentHP: '',
        characterTempHP: '',
        characterTotalHD: '',
        characterRemainingHD: '',
        characterdeathSuccess1: false,
        characterdeathSuccess2: false,
        characterdeathSuccess3: false,
        characterDeathFail1: false,
        characterDeathFail2: false,
        characterDeathFail3: false,
        characterAtkName1: '',
        characterAtkbonus1: '',
        characterAtkDamage1: '',
        characterAtkName2: '',
        characterAtkbonus2: '',
        characterAtkDamage2: '',
        characterAtkName3: '',
        characterAtkbonus3: '',
        characterAtkDamage3: '',
        characterCP: '',
        characterSP: '',
        characterEP: '',
        characterGP: '',
        characterPP: '',
        attacksAndSpellCasting: '',
        characterEquipment: '',
        characterPersonality: '',
        characterIdeals: '',
        characterBonds: '',
        characterFlaws: '',
        characterFeatures: '',
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'characterClear':
                return {
                    ...characterObj
                }
            case 'characterNameChange':
                return {
                    ...state,
                    characterName: action.payload
                }
            case 'characterClassAndLevelChange':
                return {
                    ...state,
                    characterClassAndLevel: action.payload,
                    characterProficiencyBonus: Number(action.payload.split(" ")[1]) / 4 >= 2 ?
                        Number(data.characteClassAndLevel.split(" ")[1]) / 4
                        : '+2'
                }
            case 'characterBackgroundChange':
                return {
                    ...state,
                    characterBackground: action.payload
                }
            case 'characterPlayerNameChange':
                return {
                    ...state,
                    characterPlayerName: action.payload
                }
            case 'characterRaceChange':
                return {
                    ...state,
                    characterRace: action.payload
                }
            case 'characterAlignmentChange':
                return {
                    ...state,
                    characterAlignment: action.payload
                }
            case 'characterExperiencePointsChange':
                return {
                    ...state,
                    characterExperiencePoints: action.payload
                }
            case 'characterStrengthChange':
                return {
                    ...state,
                    characterStrength: action.payload,
                    characterStrengthmod: Math.floor(((action.payload - 10) / 2)) >= 12 ?
                        `+${Math.floor(((action.payload - 10) / 2))}`
                        : Math.floor(((action.payload - 10) / 2))
                }
            case 'characterDexterityChange':
                return {
                    ...state,
                    characterDexterity: action.payload,
                    characterDexteritymod: Math.floor(((action.payload - 10) / 2))
                }
            case 'characterConstitutionChange':
                return {
                    ...state,
                    characterConstitution: action.payload,
                    characterConstitutionmod: Math.floor(((action.payload - 10) / 2))
                }
            case 'characterWisdomChange':
                return {
                    ...state,
                    characterWisdom: action.payload,
                    characterWisdommod: Math.floor(((action.payload - 10) / 2))
                }
            case 'characterIntelligenceChange':
                return {
                    ...state,
                    characterIntelligence: action.payload,
                    characterIntelligencemod: Math.floor(((action.payload - 10) / 2))
                }
            case 'characterCharismaChange':
                return {
                    ...state,
                    characterCharisma: action.payload,
                    characterCharismamod: Math.floor(((action.payload - 10) / 2))
                }
            case 'characterProficiencyBonusChange':
                return {
                    ...state,
                    characterProficiencyBonus: action.payload
                }
            case 'characterStrengthSaveChange':
                return {
                    ...state,
                    characterStrengthSave: action.payload
                }
            case 'StrengthSaveProfChange':
                return {
                    ...state,
                    StrengthSaveProf: action.payload
                }
            case 'characterDexteritySaveChange':
                return {
                    ...state,
                    characterDexteritySave: action.payload
                }
            case 'DexteritySaveProfChange':
                return {
                    ...state,
                    DexteritySaveProf: action.payload
                }
            case 'characterConstitutionSaveChange':
                return {
                    ...state,
                    characterConstitutionSave: action.payload
                }
            case 'ConstitutionSaveProfChange':
                return {
                    ...state,
                    ConstitutionSaveProf: action.payload
                }
            case 'characterWisdomSaveChange':
                return {
                    ...state,
                    characterWisdomSave: action.payload
                }
            case 'WisdomSaveProfChange':
                return {
                    ...state,
                    WisdomSaveProf: action.payload
                }
            case 'characterIntelligenceSaveChange':
                return {
                    ...state,
                    characterIntelligenceSave: action.payload
                }
            case 'IntelligenceSaveProfChange':
                return {
                    ...state,
                    IntelligenceSaveProf: action.payload
                }
            case 'characterCharismaSaveChange':
                return {
                    ...state,
                    characterCharismaSave: action.payload
                }
            case 'CharismaSaveProfChange':
                return {
                    ...state,
                    CharismaSaveProf: action.payload
                }
            case 'characterAcrobaticsSaveChange':
                return {
                    ...state,
                    characterAcrobaticsSave: action.payload
                }
            case 'AcrobaticsSaveProfChange':
                return {
                    ...state,
                    AcrobaticsSaveProf: action.payload
                }
            case 'characterAnimalHandlingSaveChange':
                return {
                    ...state,
                    characterAnimalHandlingSave: action.payload
                }
            case 'AnimalHandlingSaveProfChange':
                return {
                    ...state,
                    AnimalHandlingSaveProf: action.payload
                }
            case 'characterArcanaSaveChange':
                return {
                    ...state,
                    characterArcanaSave: action.payload
                }
            case 'ArcanaSaveProfChange':
                return {
                    ...state,
                    ArcanaSaveProf: action.payload
                }
            case 'characterAthleticsSaveChange':
                return {
                    ...state,
                    characterAthleticsSave: action.payload
                }
            case 'AthleticsSaveProfChange':
                return {
                    ...state,
                    AthleticsSaveProf: action.payload
                }
            case 'characterDeceptionSaveChange':
                return {
                    ...state,
                    characterDeceptionSave: action.payload
                }
            case 'DeceptionSaveProfChange':
                return {
                    ...state,
                    DeceptionSaveProf: action.payload
                }
            case 'characterHistorySaveChange':
                return {
                    ...state,
                    characterHistorySave: action.payload
                }
            case 'HistorySaveProfChange':
                return {
                    ...state,
                    HistorySaveProf: action.payload
                }
            case 'characterInsightSaveChange':
                return {
                    ...state,
                    characterInsightSave: action.payload
                }
            case 'InsightSaveProfChange':
                return {
                    ...state,
                    InsightSaveProf: action.payload
                }
            case 'characterIntimidationSaveChange':
                return {
                    ...state,
                    characterIntimidationSave: action.payload
                }
            case 'IntimidationSaveProfChange':
                return {
                    ...state,
                    IntimidationSaveProf: action.payload
                }
            case 'characterInvestigationSaveChange':
                return {
                    ...state,
                    characterInvestigationSave: action.payload
                }
            case 'InvestigationSaveProfChange':
                return {
                    ...state,
                    InvestigationSaveProf: action.payload
                }
            case 'characterMedicineSaveChange':
                return {
                    ...state,
                    characterMedicineSave: action.payload
                }
            case 'MedicineSaveProfChange':
                return {
                    ...state,
                    MedicineSaveProf: action.payload
                }
            case 'characterNatureSaveChange':
                return {
                    ...state,
                    characterNatureSave: action.payload
                }
            case 'NatureSaveProfChange':
                return {
                    ...state,
                    NatureSaveProf: action.payload
                }
            case 'characterPerceptionSaveChange':
                return {
                    ...state,
                    characterPerceptionSave: action.payload
                }
            case 'PerceptionSaveProfChange':
                return {
                    ...state,
                    PerceptionSaveProf: action.payload
                }
            case 'characterPerformanceSaveChange':
                return {
                    ...state,
                    characterPerformanceSave: action.payload
                }
            case 'PerformanceSaveProfChange':
                return {
                    ...state,
                    PerformanceSaveProf: action.payload
                }
            case 'characterPersuasionSaveChange':
                return {
                    ...state,
                    characterPersuasionSave: action.payload
                }
            case 'PersuasionSaveProfChange':
                return {
                    ...state,
                    PersuasionSaveProf: action.payload
                }
            case 'characterReligionSaveChange':
                return {
                    ...state,
                    characterReligionSave: action.payload
                }
            case 'ReligionSaveProfChange':
                return {
                    ...state,
                    ReligionSaveProf: action.payload
                }
            case 'characterSleightofHandSaveChange':
                return {
                    ...state,
                    characterSleightofHandSave: action.payload
                }
            case 'SleightofHandSaveProfChange':
                return {
                    ...state,
                    SleightofHandSaveProf: action.payload
                }
            case 'characterStealthSaveChange':
                return {
                    ...state,
                    characterStealthSave: action.payload
                }
            case 'StealthSaveProfChange':
                return {
                    ...state,
                    StealthSaveProf: action.payload
                }
            case 'characterSurvivalSaveChange':
                return {
                    ...state,
                    characterSurvivalSave: action.payload
                }
            case 'SurvivalSaveProfChange':
                return {
                    ...state,
                    SurvivalSaveProf: action.payload
                }
            case 'characterPassivePerceptionfChange':
                return {
                    ...state,
                    characterPassivePerception: action.payload
                }
            case 'characterOtherprofsChange':
                return {
                    ...state,
                    characterOtherprofs: action.payload
                }
            case 'characterArmorClassChange':
                return {
                    ...state,
                    characterArmorClass: action.payload
                }
            case 'characterInitiativeChange':
                return {
                    ...state,
                    characterInitiative: action.payload
                }
            case 'characterSpeedChange':
                return {
                    ...state,
                    characterSpeed: action.payload
                }
            case 'characterMaxHPChange':
                return {
                    ...state,
                    characterMaxHP: action.payload
                }
            case 'characterCurrentHPChange':
                return {
                    ...state,
                    characterCurrentHP: action.payload
                }
            case 'characterTempHPChange':
                return {
                    ...state,
                    characterTempHP: action.payload
                }
            case 'characterTotalHDChange':
                return {
                    ...state,
                    characterTotalHD: action.payload
                }
            case 'characterRemainingHDChange':
                return {
                    ...state,
                    characterRemainingHD: action.payload
                }
            case 'characterdeathSuccess1Change':
                return {
                    ...state,
                    characterdeathSuccess1: action.payload
                }
            case 'characterdeathSuccess2Change':
                return {
                    ...state,
                    characterdeathSuccess2: action.payload
                }
            case 'characterdeathSuccess3Change':
                return {
                    ...state,
                    characterdeathSuccess3: action.payload
                }
            case 'characterDeathFail1Change':
                return {
                    ...state,
                    characterDeathFail1: action.payload
                }
            case 'characterDeathFail2Change':
                return {
                    ...state,
                    characterDeathFail2: action.payload
                }
            case 'characterDeathFail3Change':
                return {
                    ...state,
                    characterDeathFail3: action.payload
                }
            case 'characterAtkName1Change':
                return {
                    ...state,
                    characterAtkName1: action.payload
                }
            case 'characterAtkbonus1Change':
                return {
                    ...state,
                    characterAtkbonus1: action.payload
                }
            case 'characterAtkDamage1Change':
                return {
                    ...state,
                    characterAtkDamage1: action.payload
                }
            case 'characterAtkName2Change':
                return {
                    ...state,
                    characterAtkName2: action.payload
                }
            case 'characterAtkbonus2Change':
                return {
                    ...state,
                    characterAtkbonus2: action.payload
                }
            case 'characterAtkDamage2Change':
                return {
                    ...state,
                    characterAtkDamage2: action.payload
                }
            case 'characterAtkName3Change':
                return {
                    ...state,
                    characterAtkName3: action.payload
                }
            case 'characterAtkbonus3Change':
                return {
                    ...state,
                    characterAtkbonus3: action.payload
                }
            case 'characterAtkDamage3Change':
                return {
                    ...state,
                    characterAtkDamage3: action.payload
                }
            case 'characterCPChange':
                return {
                    ...state,
                    characterCP: action.payload
                }
            case 'characterSPChange':
                return {
                    ...state,
                    characterSP: action.payload
                }
            case 'characterEPChange':
                return {
                    ...state,
                    characterEP: action.payload
                }
            case 'characterGPChange':
                return {
                    ...state,
                    characterGP: action.payload
                }
            case 'characterPPChange':
                return {
                    ...state,
                    characterPP: action.payload
                }
            case 'attacksAndSpellCastingChange':
                return {
                    ...state,
                    attacksAndSpellCasting: action.payload
                }
            case 'characterEquipmentChange':
                return {
                    ...state,
                    characterEquipment: action.payload
                }
            case 'characterPersonalityChange':
                return {
                    ...state,
                    characterPersonality: action.payload
                }
            case 'characterIdealsChange':
                return {
                    ...state,
                    characterIdeals: action.payload
                }
            case 'characterBondsChange':
                return {
                    ...state,
                    characterBonds: action.payload
                }
            case 'characterFlawsChange':
                return {
                    ...state,
                    characterFlaws: action.payload
                }
            case 'characterFeaturesChange':
                return {
                    ...state,
                    characterFeatures: action.payload
                }
            default:
                return state
        }
    }
    const [data, dispatch] = useReducer(reducer, characterObj)


    const dispatchlist = {
        characterNameSet: (event: React.ChangeEvent) => dispatch({ type: 'characterNameChange', payload: event.target.value }),
        characterClassAndLevelSet: (event: React.ChangeEvent) => dispatch({ type: 'characterClassAndLevelChange', payload: event.target.value }),
        characterBackgroundlSet: (event: React.ChangeEvent) => dispatch({ type: 'characterBackgroundChange', payload: event.target.value }),
        characterPlayerNameSet: (event: React.ChangeEvent) => dispatch({ type: 'characterPlayerNameChange', payload: event.target.value }),
        characterRaceSet: (event: React.ChangeEvent) => dispatch({ type: 'characterRaceChange', payload: event.target.value }),
        characterAlignmentSet: (event: React.ChangeEvent) => dispatch({ type: 'characterAlignmentChange', payload: event.target.value }),
        characterExperiencePointsSet: (event: React.ChangeEvent) => dispatch({ type: 'characterExperiencePointsChange', payload: event.target.value }),
        characterStrengthSet: (event: React.ChangeEvent) => {
            dispatch({
                type: 'characterStrengthChange',
                payload: Number(event.target.value) >= 0 & Number(event.target.value) <= 30 ? Number(event.target.value) : 0
            })
        },
        characterDexteritySet: (event: React.ChangeEvent) => {
            dispatch({
                type: 'characterDexterityChange',
                payload: Number(event.target.value) >= 0 & Number(event.target.value) <= 30 ? Number(event.target.value) : 0
            })
        },
        characterConstitutionSet: (event: React.ChangeEvent) => {
            dispatch({
                type: 'characterConstitutionChange',
                payload: Number(event.target.value) >= 0 & Number(event.target.value) <= 30 ? Number(event.target.value) : 0
            })
        },
        characterWisdomSet: (event: React.ChangeEvent) => {
            dispatch({
                type: 'characterWisdomChange',
                payload: Number(event.target.value) >= 0 & Number(event.target.value) <= 30 ? Number(event.target.value) : 0
            })
        },
        characterIntelligenceSet: (event: React.ChangeEvent) => {
            dispatch({
                type: 'characterIntelligenceChange',
                payload: Number(event.target.value) >= 0 & Number(event.target.value) <= 30 ? Number(event.target.value) : 0
            })
        },
        characterCharismaSet: (event: React.ChangeEvent) => {
            dispatch({
                type: 'characterCharismaChange',
                payload: Number(event.target.value) >= 0 & Number(event.target.value) <= 30 ? Number(event.target.value) : 0
            })
        },
        characterProficiencyBonusSet: (event: React.ChangeEvent) => {
            dispatch({
                type: 'characterProficiencyBonusChange',
                payload: Number(event.target.value) >= 2 & Number(event.target.value) <= 6 ? Number(event.target.value) : 0
            })
        },
        characterStrengthSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterStrengthSaveChange', payload: event.target.value }),
        StrengthSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'StrengthSaveProfChange', payload: !data.StrengthSaveProf }),
        characterDexteritySaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterDexteritySaveChange', payload: event.target.value }),
        DexteritySaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'DexteritySaveProfChange', payload: !data.DexteritySaveProf }),
        characterConstitutionSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterConstitutionSaveChange', payload: event.target.value }),
        ConstitutionSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'ConstitutionSaveProfChange', payload: !data.ConstitutionSaveProf }),
        characterWisdomSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterWisdomSaveChange', payload: event.target.value }),
        WisdomSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'WisdomSaveProfChange', payload: !data.WisdomSaveProf }),
        characterIntelligenceSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterIntelligenceSaveChange', payload: event.target.value }),
        IntelligenceSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'IntelligenceSaveProfChange', payload: !data.IntelligenceSaveProf }),
        characterCharismaSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterCharismaSaveChange', payload: event.target.value }),
        CharismaSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'CharismaSaveProfChange', payload: !data.CharismaSaveProf }),
        characterAcrobaticsSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterAcrobaticsSaveChange', payload: event.target.value }),
        AcrobaticsSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'AcrobaticsSaveProfChange', payload: !data.AcrobaticsSaveProf }),
        characterAnimalHandlingSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterAnimalHandlingSaveChange', payload: event.target.value }),
        AnimalHandlingSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'AnimalHandlingSaveProfChange', payload: !data.AnimalHandlingSaveProf }),
        characterArcanaSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterArcanaSaveChange', payload: event.target.value }),
        ArcanaSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'ArcanaSaveProfChange', payload: !data.ArcanaSaveProf }),
        characterAthleticsSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterAthleticsSaveChange', payload: event.target.value }),
        AthleticsSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'AthleticsSaveProfChange', payload: !data.AthleticsSaveProf }),
        characterDeceptionSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterDeceptionSaveChange', payload: event.target.value }),
        DeceptionSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'DeceptionSaveProfChange', payload: !data.DeceptionSaveProf }),
        characterHistorySaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterHistorySaveChange', payload: event.target.value }),
        HistorySaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'HistorySaveProfChange', payload: !data.HistorySaveProf }),
        characterInsightSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterInsightSaveChange', payload: event.target.value }),
        InsightSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'InsightSaveProfChange', payload: !data.InsightSaveProf }),
        characterIntimidationSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterIntimidationSaveChange', payload: event.target.value }),
        IntimidationSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'IntimidationSaveProfChange', payload: !data.IntimidationSaveProf }),
        characterInvestigationSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterInvestigationSaveChange', payload: event.target.value }),
        InvestigationSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'InvestigationSaveProfChange', payload: !data.InvestigationSaveProf }),
        characterMedicineSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterMedicineSaveChange', payload: event.target.value }),
        MedicineSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'MedicineSaveProfChange', payload: !data.MedicineSaveProf }),
        characterNatureSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterNatureSaveChange', payload: event.target.value }),
        NatureSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'NatureSaveProfChange', payload: !data.NatureSaveProf }),
        characterPerceptionSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterPerceptionSaveChange', payload: event.target.value }),
        PerceptionSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'PerceptionSaveProfChange', payload: !data.PerceptionSaveProf }),
        characterPerformanceSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterPerformanceSaveChange', payload: event.target.value }),
        PerformanceSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'PerformanceSaveProfChange', payload: !data.PerformanceSaveProf }),
        characterPersuasionSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterPersuasionSaveChange', payload: event.target.value }),
        PersuasionSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'PersuasionSaveProfChange', payload: !data.PersuasionSaveProf }),
        characterReligionSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterReligionSaveChange', payload: event.target.value }),
        ReligionSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'ReligionSaveProfChange', payload: !data.ReligionSaveProf }),
        characterSleightofHandSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterSleightofHandSaveChange', payload: event.target.value }),
        SleightofHandSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'SleightofHandSaveProfChange', payload: !data.SleightofHandSaveProf }),
        characterStealthSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterStealthSaveChange', payload: event.target.value }),
        StealthSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'StealthSaveProfChange', payload: !data.StealthSaveProf }),
        characterSurvivalSaveSet: (event: React.ChangeEvent) => dispatch({ type: 'characterSurvivalSaveChange', payload: event.target.value }),
        SurvivalSaveProfSet: (event: React.ChangeEvent) => dispatch({ type: 'SurvivalSaveProfChange', payload: !data.SurvivalSaveProf }),
        characterPassivePerceptionSet: (event: React.ChangeEvent) => dispatch({ type: 'characterPassivePerceptionfChange', payload: event.target.value }),
        characterOtherprofsSet: (event: React.ChangeEvent) => dispatch({ type: 'characterOtherprofsChange', payload: event.target.value }),
        characterArmorClassSet: (event: React.ChangeEvent) => dispatch({ type: 'characterArmorClassChange', payload: event.target.value }),
        characterInitiativeSet: (event: React.ChangeEvent) => dispatch({ type: 'characterInitiativeChange', payload: event.target.value }),
        characterSpeedSet: (event: React.ChangeEvent) => dispatch({ type: 'characterSpeedChange', payload: event.target.value }),
        characterMaxHPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterMaxHPChange', payload: event.target.value }),
        characterCurrentHPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterCurrentHPChange', payload: event.target.value }),
        characterTempHPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterTempHPChange', payload: event.target.value }),
        characterTotalHDSet: (event: React.ChangeEvent) => dispatch({ type: 'characterTotalHDChange', payload: event.target.value }),
        characterRemainingHDSet: (event: React.ChangeEvent) => dispatch({ type: 'characterRemainingHDChange', payload: event.target.value }),
        characterdeathSuccess1Set: (event: React.ChangeEvent) => dispatch({ type: 'characterdeathSuccess1Change', payload: !data.characterdeathSuccess1 }),
        characterdeathSuccess2Set: (event: React.ChangeEvent) => dispatch({ type: 'characterdeathSuccess2Change', payload: !data.characterdeathSuccess2 }),
        characterdeathSuccess3Set: (event: React.ChangeEvent) => dispatch({ type: 'characterdeathSuccess3Change', payload: !data.characterdeathSuccess3 }),
        characterDeathFail1Set: (event: React.ChangeEvent) => dispatch({ type: 'characterDeathFail1Change', payload: !data.characterDeathFail1 }),
        characterDeathFail2Set: (event: React.ChangeEvent) => dispatch({ type: 'characterDeathFail2Change', payload: !data.characterDeathFail2 }),
        characterDeathFail3Set: (event: React.ChangeEvent) => dispatch({ type: 'characterDeathFail3Change', payload: !data.characterDeathFail3 }),
        characterAtkName1Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkName1Change', payload: event.target.value }),
        characterAtkbonus1Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkbonus1Change', payload: event.target.value }),
        characterAtkDamage1Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkDamage1Change', payload: event.target.value }),
        characterAtkName2Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkName2Change', payload: event.target.value }),
        characterAtkbonus2Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkbonus2Change', payload: event.target.value }),
        characterAtkDamage2Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkDamage2Change', payload: event.target.value }),
        characterAtkName3Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkName3Change', payload: event.target.value }),
        characterAtkbonus3Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkbonus3Change', payload: event.target.value }),
        characterAtkDamage3Set: (event: React.ChangeEvent) => dispatch({ type: 'characterAtkDamage3Change', payload: event.target.value }),
        characterCPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterCPChange', payload: event.target.value }),
        characterSPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterSPChange', payload: event.target.value }),
        characterEPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterEPChange', payload: event.target.value }),
        characterGPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterGPChange', payload: event.target.value }),
        characterPPSet: (event: React.ChangeEvent) => dispatch({ type: 'characterPPChange', payload: event.target.value }),
        attacksAndSpellCastingSet: (event: React.ChangeEvent) => dispatch({ type: 'attacksAndSpellCastingChange', payload: event.target.value }),
        characterEquipmentSet: (event: React.ChangeEvent) => dispatch({ type: 'characterEquipmentChange', payload: event.target.value }),
        characterPersonalitySet: (event: React.ChangeEvent) => dispatch({ type: 'characterPersonalityChange', payload: event.target.value }),
        characterIdealsSet: (event: React.ChangeEvent) => dispatch({ type: 'characterIdealsChange', payload: event.target.value }),
        characterBondsSet: (event: React.ChangeEvent) => dispatch({ type: 'characterBondsChange', payload: event.target.value }),
        characterFlawsSet: (event: React.ChangeEvent) => dispatch({ type: 'characterFlawsChange', payload: event.target.value }),
        characterFeaturesSet: (event: React.ChangeEvent) => dispatch({ type: 'characterFeaturesChange', payload: event.target.value }),
    }

    const handleClear = () => {
        dispatch({ type: 'characterClear' })
    }

    return (
        <>
            <BurgerProvider>
                <Header>
                    <ButtonElement name='Dowload' clickFuntion={handlePrint} />
                    <ButtonElement name='Clear' clickFuntion={handleClear} />
                </Header>
                <Navigation />
                <CharacterSheet
                    componentReference={componentRef}
                    data={data}
                    dispatch={dispatchlist}
                />
            </BurgerProvider >
        </>
    )
}