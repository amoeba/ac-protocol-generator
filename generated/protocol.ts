enum PacketHeaderFlags {
    None = 0,
    Retransmission = 1,
    EncryptedChecksum = 2,
    BlobFragments = 4,
    ServerSwitch = 256,
    LogonServerAddr = 512,
    EmptyHeader1 = 1024,
    Referral = 2048,
    RequestRetransmit = 4096,
    RejectRetransmit = 8192,
    AckSequence = 16384,
    Disconnect = 32768,
    LoginRequest = 65536,
    WorldLoginRequest = 131072,
    ConnectRequest = 262144,
    ConnectResponse = 524288,
    NetError = 1048576,
    NetErrorDisconnect = 2097152,
    CICMDCommand = 4194304,
    TimeSync = 16777216,
    EchoRequest = 33554432,
    EchoResponse = 67108864,
    Flow = 134217728
}
enum FragmentGroup {
    Event = 5,
    Private = 9,
    Object = 10
}
/*The type of server to switch*/
enum ServerSwitchType {
    World = 0,
    Logon = 1
}
enum AuthFlags {
    None = 0,
    EnableCrypto = 1,
    AdminAccountOverride = 2,
    LastDefault = 4
}
enum NetAuthType {
    Undef = 0,
    Account = 1,
    AccountPassword = 2,
    GlsTicket = 1073741826
}
enum GameMessageGroup {
    Event = 1,
    /*C2S, small number of admin messages and a few others*/
    Control = 2,
    /*C2S, most all game actions, all ordered*/
    Weenie = 3,
    /*Bidirectional, login messages, turbine chat*/
    Logon = 4,
    /*Bidirectional, DAT patching*/
    Database = 5,
    SecureControl = 6,
    SecureWeenie = 7,
    SecureLogin = 8,
    /*S2C, game events (ordered) and other character related messages*/
    UIQueue = 9,
    /*S2C, messages mostly related to object creation/deletion and their motion, effects*/
    SmartBox = 10,
    Observer = 8
}
/*Client to Server message opcodes*/
enum C2SMessage {
    Login_LogOffCharacter = 63059,
    Character_CharacterDelete = 63061,
    Character_SendCharGenResult = 63062,
    Login_SendEnterWorld = 63063,
    Object_SendForceObjdesc = 63210,
    Login_SendEnterWorldRequest = 63432,
    Admin_SendAdminGetServerVersion = 63436,
    Social_SendFriendsCommand = 63437,
    Admin_SendAdminRestoreCharacter = 63449,
    Communication_TurbineChat = 63454,
    DDD_RequestDataMessage = 63459,
    DDD_InterrogationResponseMessage = 63462,
    DDD_OnEndDDD = 63466,
    DDD_EndDDDMessage = 63467,
    Ordered_GameAction = 63409
}
/*Server to Client message opcodes*/
enum S2CMessage {
    Item_ServerSaysRemove = 36,
    Character_ServerSaysAttemptFailed = 160,
    Item_UpdateStackSize = 407,
    Combat_HandlePlayerDeathEvent = 414,
    Qualities_PrivateRemoveIntEvent = 465,
    Qualities_RemoveIntEvent = 466,
    Qualities_PrivateRemoveBoolEvent = 467,
    Qualities_RemoveBoolEvent = 468,
    Qualities_PrivateRemoveFloatEvent = 469,
    Qualities_RemoveFloatEvent = 470,
    Qualities_PrivateRemoveStringEvent = 471,
    Qualities_RemoveStringEvent = 472,
    Qualities_PrivateRemoveDataIdEvent = 473,
    Qualities_RemoveDataIdEvent = 474,
    Qualities_PrivateRemoveInstanceIdEvent = 475,
    Qualities_RemoveInstanceIdEvent = 476,
    Qualities_PrivateRemovePositionEvent = 477,
    Qualities_RemovePositionEvent = 478,
    Communication_HearEmote = 480,
    Communication_HearSoulEmote = 482,
    Qualities_PrivateRemoveInt64Event = 696,
    Qualities_RemoveInt64Event = 697,
    Communication_HearSpeech = 699,
    Communication_HearRangedSpeech = 700,
    Qualities_PrivateUpdateInt = 717,
    Qualities_UpdateInt = 718,
    Qualities_PrivateUpdateInt64 = 719,
    Qualities_UpdateInt64 = 720,
    Qualities_PrivateUpdateBool = 721,
    Qualities_UpdateBool = 722,
    Qualities_PrivateUpdateFloat = 723,
    Qualities_UpdateFloat = 724,
    Qualities_PrivateUpdateString = 725,
    Qualities_UpdateString = 726,
    Qualities_PrivateUpdateDataId = 727,
    Qualities_UpdateDataId = 728,
    Qualities_PrivateUpdateInstanceId = 729,
    Qualities_UpdateInstanceId = 730,
    Qualities_PrivateUpdatePosition = 731,
    Qualities_UpdatePosition = 732,
    Qualities_PrivateUpdateSkill = 733,
    Qualities_UpdateSkill = 734,
    Qualities_PrivateUpdateSkillLevel = 735,
    Qualities_UpdateSkillLevel = 736,
    Qualities_PrivateUpdateSkillAC = 737,
    Qualities_UpdateSkillAC = 738,
    Qualities_PrivateUpdateAttribute = 739,
    Qualities_UpdateAttribute = 740,
    Qualities_PrivateUpdateAttributeLevel = 741,
    Qualities_UpdateAttributeLevel = 742,
    Qualities_PrivateUpdateAttribute2nd = 743,
    Qualities_UpdateAttribute2nd = 744,
    Qualities_PrivateUpdateAttribute2ndLevel = 745,
    Qualities_UpdateAttribute2ndLevel = 746,
    Admin_Environs = 60000,
    Movement_PositionAndMovementEvent = 63001,
    Item_ObjDescEvent = 63013,
    Character_SetPlayerVisualDesc = 63024,
    Character_CharGenVerificationResponse = 63043,
    Login_AwaitingSubscriptionExpiration = 63057,
    Login_LogOffCharacter = 63059,
    Character_CharacterDelete = 63061,
    Login_LoginCharacterSet = 63064,
    Character_CharacterError = 63065,
    Item_CreateObject = 63301,
    Login_CreatePlayer = 63302,
    Item_DeleteObject = 63303,
    Movement_PositionEvent = 63304,
    Item_ParentEvent = 63305,
    Inventory_PickupEvent = 63306,
    Item_SetState = 63307,
    Movement_SetObjectMovement = 63308,
    Movement_VectorUpdate = 63310,
    Effects_SoundEvent = 63312,
    Effects_PlayerTeleport = 63313,
    Effects_PlayScriptId = 63316,
    Effects_PlayScriptType = 63317,
    Login_AccountBanned = 63425,
    Admin_ReceiveAccountData = 63434,
    Admin_ReceivePlayerData = 63435,
    Item_UpdateObject = 63451,
    Login_AccountBooted = 63452,
    Communication_TurbineChat = 63454,
    Login_EnterGame_ServerReady = 63455,
    Communication_TextboxString = 63456,
    Login_WorldInfo = 63457,
    DDD_DataMessage = 63458,
    DDD_ErrorMessage = 63460,
    DDD_InterrogationMessage = 63461,
    DDD_BeginDDDMessage = 63463,
    DDD_OnEndDDD = 63466,
    Ordered_GameEvent = 63408
}
/*Ordered (0xF7B0) Server to Client opcodes*/
enum GameEvent {
    Allegiance_AllegianceUpdateAborted = 3,
    Communication_PopUpString = 4,
    Login_PlayerDescription = 19,
    Allegiance_AllegianceUpdate = 32,
    Social_FriendsUpdate = 33,
    Item_ServerSaysContainId = 34,
    Item_WearItem = 35,
    Social_CharacterTitleTable = 41,
    Social_AddOrSetCharacterTitle = 43,
    Item_StopViewingObjectContents = 82,
    Vendor_VendorInfo = 98,
    Character_StartBarber = 117,
    Fellowship_Quit = 163,
    Fellowship_Dismiss = 164,
    Writing_BookOpen = 180,
    Writing_BookAddPageResponse = 182,
    Writing_BookDeletePageResponse = 183,
    Writing_BookPageDataResponse = 184,
    Item_GetInscriptionResponse = 195,
    Item_SetAppraiseInfo = 201,
    Communication_ChannelBroadcast = 327,
    Communication_ChannelList = 328,
    Communication_ChannelIndex = 329,
    Item_OnViewContents = 406,
    Item_ServerSaysMoveItem = 410,
    Combat_HandleAttackDoneEvent = 423,
    Magic_RemoveSpell = 424,
    Combat_HandleVictimNotificationEventSelf = 428,
    Combat_HandleVictimNotificationEventOther = 429,
    Combat_HandleAttackerNotificationEvent = 433,
    Combat_HandleDefenderNotificationEvent = 434,
    Combat_HandleEvasionAttackerNotificationEvent = 435,
    Combat_HandleEvasionDefenderNotificationEvent = 436,
    Combat_HandleCommenceAttackEvent = 440,
    Combat_QueryHealthResponse = 448,
    Character_QueryAgeResponse = 451,
    Item_UseDone = 455,
    Allegiance_AllegianceUpdateDone = 456,
    Fellowship_FellowUpdateDone = 457,
    Fellowship_FellowStatsDone = 458,
    Item_AppraiseDone = 459,
    Character_ReturnPing = 490,
    Communication_SetSquelchDB = 500,
    Trade_RegisterTrade = 509,
    Trade_OpenTrade = 510,
    Trade_CloseTrade = 511,
    Trade_AddToTrade = 512,
    Trade_RemoveFromTrade = 513,
    Trade_AcceptTrade = 514,
    Trade_DeclineTrade = 515,
    Trade_ResetTrade = 517,
    Trade_TradeFailure = 519,
    Trade_ClearTradeAcceptance = 520,
    House_HouseProfile = 541,
    House_HouseData = 549,
    House_HouseStatus = 550,
    House_UpdateRentTime = 551,
    House_UpdateRentPayment = 552,
    House_UpdateRestrictions = 584,
    House_UpdateHAR = 599,
    House_HouseTransaction = 601,
    Item_QueryItemManaResponse = 612,
    House_AvailableHouses = 625,
    Character_ConfirmationRequest = 628,
    Character_ConfirmationDone = 630,
    Allegiance_AllegianceLoginNotificationEvent = 634,
    Allegiance_AllegianceInfoResponseEvent = 636,
    Game_JoinGameResponse = 641,
    Game_StartGame = 642,
    Game_MoveResponse = 643,
    Game_OpponentTurn = 644,
    Game_OpponentStalemateState = 645,
    Communication_WeenieError = 650,
    Communication_WeenieErrorWithString = 651,
    Game_GameOver = 652,
    Communication_ChatRoomTracker = 661,
    Admin_QueryPluginList = 686,
    Admin_QueryPlugin = 689,
    Admin_QueryPluginResponse2 = 691,
    Inventory_SalvageOperationsResultData = 692,
    Communication_HearDirectSpeech = 701,
    Fellowship_FullUpdate = 702,
    Fellowship_Disband = 703,
    Fellowship_UpdateFellow = 704,
    Magic_UpdateSpell = 705,
    Magic_UpdateEnchantment = 706,
    Magic_RemoveEnchantment = 707,
    Magic_UpdateMultipleEnchantments = 708,
    Magic_RemoveMultipleEnchantments = 709,
    Magic_PurgeEnchantments = 710,
    Magic_DispelEnchantment = 711,
    Magic_DispelMultipleEnchantments = 712,
    Misc_PortalStormBrewing = 713,
    Misc_PortalStormImminent = 714,
    Misc_PortalStorm = 715,
    Misc_PortalStormSubsided = 716,
    Communication_TransientString = 747,
    Magic_PurgeBadEnchantments = 786,
    Social_SendClientContractTrackerTable = 788,
    Social_SendClientContractTracker = 789
}
/*Ordered (0xF7B1) Client to server opcodes*/
enum GameAction {
    Character_PlayerOptionChangedEvent = 5,
    Combat_TargetedMeleeAttack = 8,
    Combat_TargetedMissileAttack = 10,
    Communication_SetAFKMode = 15,
    Communication_SetAFKMessage = 16,
    Communication_Talk = 21,
    Social_RemoveFriend = 23,
    Social_AddFriend = 24,
    Inventory_PutItemInContainer = 25,
    Inventory_GetAndWieldItem = 26,
    Inventory_DropItem = 27,
    Allegiance_SwearAllegiance = 29,
    Allegiance_BreakAllegiance = 30,
    Allegiance_UpdateRequest = 31,
    Social_ClearFriends = 37,
    Character_TeleToPKLArena = 38,
    Character_TeleToPKArena = 39,
    Social_SetDisplayCharacterTitle = 44,
    Allegiance_QueryAllegianceName = 48,
    Allegiance_ClearAllegianceName = 49,
    Communication_TalkDirect = 50,
    Allegiance_SetAllegianceName = 51,
    Inventory_UseWithTargetEvent = 53,
    Inventory_UseEvent = 54,
    Allegiance_SetAllegianceOfficer = 59,
    Allegiance_SetAllegianceOfficerTitle = 60,
    Allegiance_ListAllegianceOfficerTitles = 61,
    Allegiance_ClearAllegianceOfficerTitles = 62,
    Allegiance_DoAllegianceLockAction = 63,
    Allegiance_SetAllegianceApprovedVassal = 64,
    Allegiance_AllegianceChatGag = 65,
    Allegiance_DoAllegianceHouseAction = 66,
    Train_TrainAttribute2nd = 68,
    Train_TrainAttribute = 69,
    Train_TrainSkill = 70,
    Train_TrainSkillAdvancementClass = 71,
    Magic_CastUntargetedSpell = 72,
    Magic_CastTargetedSpell = 74,
    Combat_ChangeCombatMode = 83,
    Inventory_StackableMerge = 84,
    Inventory_StackableSplitToContainer = 85,
    Inventory_StackableSplitTo3D = 86,
    Communication_ModifyCharacterSquelch = 88,
    Communication_ModifyAccountSquelch = 89,
    Communication_ModifyGlobalSquelch = 91,
    Communication_TalkDirectByName = 93,
    Vendor_Buy = 95,
    Vendor_Sell = 96,
    Character_TeleToLifestone = 99,
    Character_LoginCompleteNotification = 161,
    Fellowship_Create = 162,
    Fellowship_Quit = 163,
    Fellowship_Dismiss = 164,
    Fellowship_Recruit = 165,
    Fellowship_UpdateRequest = 166,
    Writing_BookAddPage = 170,
    Writing_BookModifyPage = 171,
    Writing_BookData = 172,
    Writing_BookDeletePage = 173,
    Writing_BookPageData = 174,
    Writing_SetInscription = 191,
    Item_Appraise = 200,
    Inventory_GiveObjectRequest = 205,
    Advocate_Teleport = 214,
    Character_AbuseLogRequest = 320,
    Communication_AddToChannel = 325,
    Communication_RemoveFromChannel = 326,
    Communication_ChannelBroadcast = 327,
    Communication_ChannelList = 328,
    Communication_ChannelIndex = 329,
    Inventory_NoLongerViewingContents = 405,
    Inventory_StackableSplitToWield = 411,
    Character_AddShortCut = 412,
    Character_RemoveShortCut = 413,
    Character_CharacterOptionsEvent = 417,
    Magic_RemoveSpell = 424,
    Combat_CancelAttack = 439,
    Combat_QueryHealth = 447,
    Character_QueryAge = 450,
    Character_QueryBirth = 452,
    Communication_Emote = 479,
    Communication_SoulEmote = 481,
    Character_AddSpellFavorite = 483,
    Character_RemoveSpellFavorite = 484,
    Character_RequestPing = 489,
    Trade_OpenTradeNegotiations = 502,
    Trade_CloseTradeNegotiations = 503,
    Trade_AddToTrade = 504,
    Trade_AcceptTrade = 506,
    Trade_DeclineTrade = 507,
    Trade_ResetTrade = 516,
    Character_ClearPlayerConsentList = 534,
    Character_DisplayPlayerConsentList = 535,
    Character_RemoveFromPlayerConsentList = 536,
    Character_AddPlayerPermission = 537,
    House_BuyHouse = 540,
    House_QueryHouse = 542,
    House_AbandonHouse = 543,
    Character_RemovePlayerPermission = 544,
    House_RentHouse = 545,
    Character_SetDesiredComponentLevel = 548,
    House_AddPermanentGuest = 581,
    House_RemovePermanentGuest = 582,
    House_SetOpenHouseStatus = 583,
    House_ChangeStoragePermission = 585,
    House_BootSpecificHouseGuest = 586,
    House_RemoveAllStoragePermission = 588,
    House_RequestFullGuestList = 589,
    Allegiance_SetMotd = 596,
    Allegiance_QueryMotd = 597,
    Allegiance_ClearMotd = 598,
    House_QueryLord = 600,
    House_AddAllStoragePermission = 604,
    House_RemoveAllPermanentGuests = 606,
    House_BootEveryone = 607,
    House_TeleToHouse = 610,
    Item_QueryItemMana = 611,
    House_SetHooksVisibility = 614,
    House_ModifyAllegianceGuestPermission = 615,
    House_ModifyAllegianceStoragePermission = 616,
    Game_Join = 617,
    Game_Quit = 618,
    Game_Move = 619,
    Game_MovePass = 621,
    Game_Stalemate = 622,
    House_ListAvailableHouses = 624,
    Character_ConfirmationResponse = 629,
    Allegiance_BreakAllegianceBoot = 631,
    House_TeleToMansion = 632,
    Character_Suicide = 633,
    Allegiance_AllegianceInfoRequest = 635,
    Inventory_CreateTinkeringTool = 637,
    Character_SpellbookFilterEvent = 646,
    Character_TeleToMarketplace = 653,
    Character_EnterPKLite = 655,
    Fellowship_AssignNewLeader = 656,
    Fellowship_ChangeFellowOpeness = 657,
    Allegiance_AllegianceChatBoot = 672,
    Allegiance_AddAllegianceBan = 673,
    Allegiance_RemoveAllegianceBan = 674,
    Allegiance_ListAllegianceBans = 675,
    Allegiance_RemoveAllegianceOfficer = 677,
    Allegiance_ListAllegianceOfficers = 678,
    Allegiance_ClearAllegianceOfficers = 679,
    Allegiance_RecallAllegianceHometown = 683,
    Admin_QueryPluginListResponse = 687,
    Admin_QueryPluginResponse = 690,
    Character_FinishBarber = 785,
    Social_AbandonContract = 790,
    Movement_Jump = 63003,
    Movement_MoveToState = 63004,
    Movement_DoMovementCommand = 63006,
    Movement_StopMovementCommand = 63073,
    Movement_AutonomyLevel = 63314,
    Movement_AutonomousPosition = 63315,
    Movement_Jump_NonAutonomous = 63433
}
enum WeenieType {
    Undef = 0,
    Generic = 1,
    Clothing = 2,
    MissileLauncher = 3,
    Missile = 4,
    Ammunition = 5,
    MeleeWeapon = 6,
    Portal = 7,
    Book = 8,
    Coin = 9,
    Creature = 10,
    Admin = 11,
    Vendor = 12,
    HotSpot = 13,
    Corpse = 14,
    Cow = 15,
    AI = 16,
    Machine = 17,
    Food = 18,
    Door = 19,
    Chest = 20,
    Container = 21,
    Key = 22,
    Lockpick = 23,
    PressurePlate = 24,
    LifeStone = 25,
    Switch = 26,
    PKModifier = 27,
    Healer = 28,
    LightSource = 29,
    Allegiance = 30,
    UNKNOWN__GUESSEDNAME32 = 31,
    SpellComponent = 32,
    ProjectileSpell = 33,
    Scroll = 34,
    Caster = 35,
    Channel = 36,
    ManaStone = 37,
    Gem = 38,
    AdvocateFane = 39,
    AdvocateItem = 40,
    Sentinel = 41,
    GSpellEconomy = 42,
    LSpellEconomy = 43,
    CraftTool = 44,
    LScoreKeeper = 45,
    GScoreKeeper = 46,
    GScoreGatherer = 47,
    ScoreBook = 48,
    EventCoordinator = 49,
    Entity = 50,
    Stackable = 51,
    HUD = 52,
    House = 53,
    Deed = 54,
    SlumLord = 55,
    Hook = 56,
    Storage = 57,
    BootSpot = 58,
    HousePortal = 59,
    Game = 60,
    GamePiece = 61,
    SkillAlterationDevice = 62,
    AttributeTransferDevice = 63,
    Hooker = 64,
    AllegianceBindstone = 65,
    InGameStatKeeper = 66,
    AugmentationDevice = 67,
    SocialManager = 68,
    Pet = 69,
    PetDevice = 70,
    CombatPet = 71
}
/*Flags that dictate what property tables are included with the ACBaseQuali*/
enum ACBaseQualitiesFlags {
    None = 0,
    PropertyInt = 1,
    PropertyBool = 2,
    PropertyFloat = 4,
    PropertyDataId = 8,
    PropertyString = 16,
    PropertyPosition = 32,
    PropertyInstanceId = 64,
    PropertyInt64 = 128
}
/*Set of predefined error messages that accept interpolated string argument*/
enum WeenieErrorWithString {
    IsTooBusyToAcceptGifts = 30,
    CannotCarryAnymore = 43,
    YouFailToAffect_YouCannotAffectAnyone = 78,
    YouFailToAffect_TheyCannotBeHarmed = 79,
    YouFailToAffect_WithBeneficialSpells = 80,
    YouFailToAffect_YouAreNotPK = 81,
    YouFailToAffect_TheyAreNotPK = 82,
    YouFailToAffect_NotSamePKType = 83,
    YouFailToAffect_AcrossHouseBoundary = 84,
    IsNotAcceptingGiftsRightNow = 1007,
    IsAlreadyOneOfYourFollowers = 1043,
    CannotHaveAnyMoreVassals = 1046,
    DoesntKnowWhatToDoWithThat = 1130,
    YouMustBeAboveLevel_ToBuyHouse = 1160,
    YouMustBeAtOrBelowLevel_ToBuyHouse = 1161,
    YouMustBeAboveAllegianceRank_ToBuyHouse = 1163,
    YouMustBeAtOrBelowAllegianceRank_ToBuyHouse = 1164,
    The_WasNotSuitableForSalvaging = 1215,
    The_ContainseTheWrongMaterial = 1216,
    YouMustBe_ToUseItemMagic = 1222,
    Your_IsTooLowToUseItemMagic = 1225,
    Only_MayUseItemMagic = 1226,
    YouMustSpecialize_ToUseItemMagic = 1227,
    AiRefuseItemDuringEmote = 1230,
    CannotAcceptStackedItems = 1231,
    Your_SkillMustBeTrained = 1233,
    NotEnoughSkillCreditsToSpecialize = 1234,
    TooMuchXPToRecoverFromSkill = 1235,
    Your_SkillIsAlreadyUntrained = 1236,
    CannotLowerSkillWhileWieldingItem = 1237,
    YouHaveSucceededSpecializing_Skill = 1238,
    YouHaveSucceededUnspecializing_Skill = 1239,
    YouHaveSucceededUntraining_Skill = 1240,
    CannotUntrain_SkillButRecoveredXP = 1241,
    TooManyCreditsInSpecializedSkills = 1242,
    AttributeTransferFromTooLow = 1246,
    AttributeTransferToTooHigh = 1247,
    ItemUnusableOnHook_CannotOpen = 1256,
    ItemUnusableOnHook_CanOpen = 1257,
    ItemOnlyUsableOnHook = 1258,
    FailsToAffectYou_TheyCannotAffectAnyone = 1268,
    FailsToAffectYou_YouCannotBeHarmed = 1269,
    FailsToAffectYou_TheyAreNotPK = 1270,
    FailsToAffectYou_YouAreNotPK = 1271,
    FailsToAffectYou_NotSamePKType = 1272,
    FailsToAffectYouAcrossHouseBoundary = 1273,
    IsAnInvalidTarget = 1274,
    YouAreInvalidTargetForSpellOf_ = 1275,
    IsAtFullHealth = 1279,
    HasNoSpellTargets = 1289,
    YouHaveNoTargetsForSpellOf_ = 1290,
    IsNowOpenFellowship = 1291,
    IsNowClosedFellowship = 1292,
    IsNowLeaderOfFellowship = 1293,
    YouHavePassedFellowshipLeadershipTo_ = 1294,
    MaxNumberOf_Hooked = 1296,
    MaxNumberOf_HookedUntilOneIsRemoved = 1300,
    NoLongerMaxNumberOf_Hooked = 1301,
    IsNotCloseEnoughToYourLevel = 1303,
    LockedFellowshipCannotRecruit_ = 1304,
    YouHaveEnteredThe_Channel = 1307,
    YouHaveLeftThe_Channel = 1308,
    WillNotReceiveMessage = 1310,
    MessageBlocked_ = 1311,
    HasBeenAddedToHearList = 1313,
    HasBeenRemovedFromHearList = 1314,
    FailToRemove_FromLoudList = 1317,
    YouCannotOpenLockedFellowship = 1320,
    YouAreNowSnoopingOn_ = 1324,
    YouAreNoLongerSnoopingOn_ = 1325,
    YouFailToSnoopOn_ = 1326,
    AttemptedToSnoopOnYou = 1327,
    IsAlreadyBeingSnoopedOn = 1328,
    IsInLimbo = 1329,
    YouHaveBeenBootedFromAllegianceChat = 1331,
    HasBeenBootedFromAllegianceChat = 1332,
    AccountOf_IsAlreadyBannedFromAllegiance = 1334,
    AccountOf_IsNotBannedFromAllegiance = 1335,
    AccountOf_WasNotUnbannedFromAllegiance = 1336,
    AccountOf_IsBannedFromAllegiance = 1337,
    AccountOf_IsUnbannedFromAllegiance = 1338,
    ListOfBannedCharacters = 1339,
    IsBannedFromAllegiance = 1342,
    YouAreBannedFromAllegiance = 1343,
    IsNowAllegianceOfficer = 1345,
    ErrorSetting_AsAllegianceOfficer = 1346,
    IsNoLongerAllegianceOfficer = 1347,
    ErrorRemoving_AsAllegianceOFficer = 1348,
    YouMustWait_BeforeCommunicating = 1351,
    YourAllegianceOfficerStatusChanged = 1353,
    IsAlreadyAllegianceOfficerOfThatLevel = 1355,
    The_IsCurrentlyInUse = 1357,
    YouAreNotListeningTo_Channel = 1361,
    AugmentationSkillNotTrained = 1370,
    YouSuccededAcquiringAugmentation = 1371,
    YouSucceededRecoveringXPFromSkill_AugmentationNotUntrainable = 1372,
    AFK = 1374,
    IsAlreadyOnYourFriendsList = 1378,
    YouMayOnlyChangeAllegianceNameOnceEvery24Hours = 1386,
    IsTheMonarchAndCannotBePromotedOrDemoted = 1389,
    ThatLevelOfAllegianceOfficerIsNowKnownAs_ = 1390,
    YourAllegianceIsCurrently_ = 1396,
    YourAllegianceIsNow_ = 1397,
    YouCannotAcceptAllegiance_YourAllegianceIsLocked = 1398,
    YouCannotSwearAllegiance_AllegianceOf_IsLocked = 1399,
    YouHavePreApproved_ToJoinAllegiance = 1400,
    IsAlreadyMemberOfYourAllegiance = 1402,
    HasBeenPreApprovedToJoinYourAllegiance = 1403,
    YourAllegianceChatPrivilegesRemoved = 1407,
    IsTemporarilyGaggedInAllegianceChat = 1408,
    YourAllegianceChatPrivilegesRestoredBy_ = 1410,
    YouRestoreAllegianceChatPrivilegesTo_ = 1411,
    CowersFromYou = 1418
}
/*Set of predefined error messages*/
enum WeenieError {
    None = 0,
    NoMem = 1,
    BadParam = 2,
    DivZero = 3,
    SegV = 4,
    Unimplemented = 5,
    UnknownMessageType = 6,
    NoAnimationTable = 7,
    NoPhysicsObject = 8,
    NoBookieObject = 9,
    NoWslObject = 10,
    NoMotionInterpreter = 11,
    UnhandledSwitch = 12,
    DefaultConstructorCalled = 13,
    InvalidCombatManeuver = 14,
    BadCast = 15,
    MissingQuality = 16,
    MissingDatabaseObject = 18,
    NoCallbackSet = 19,
    CorruptQuality = 20,
    BadContext = 21,
    NoEphseqManager = 22,
    BadMovementEvent = 23,
    CannotCreateNewObject = 24,
    NoControllerObject = 25,
    CannotSendEvent = 26,
    PhysicsCantTransition = 27,
    PhysicsMaxDistanceExceeded = 28,
    YoureTooBusy = 29,
    CannotSendMessage = 31,
    IllegalInventoryTransaction = 32,
    ExternalWeenieObject = 33,
    InternalWeenieObject = 34,
    MotionFailure = 35,
    YouCantJumpWhileInTheAir = 36,
    InqCylSphereFailure = 37,
    ThatIsNotAValidCommand = 38,
    CarryingItem = 39,
    Frozen = 40,
    Stuck = 41,
    YouAreTooEncumbered = 42,
    BadContain = 44,
    BadParent = 45,
    BadDrop = 46,
    BadRelease = 47,
    MsgBadMsg = 48,
    MsgUnpackFailed = 49,
    MsgNoMsg = 50,
    MsgUnderflow = 51,
    MsgOverflow = 52,
    MsgCallbackFailed = 53,
    ActionCancelled = 54,
    ObjectGone = 55,
    NoObject = 56,
    CantGetThere = 57,
    Dead = 58,
    ILeftTheWorld = 59,
    ITeleported = 60,
    YouChargedTooFar = 61,
    YouAreTooTiredToDoThat = 62,
    CantCrouchInCombat = 63,
    CantSitInCombat = 64,
    CantLieDownInCombat = 65,
    CantChatEmoteInCombat = 66,
    NoMtableData = 67,
    CantChatEmoteNotStanding = 68,
    TooManyActions = 69,
    Hidden = 70,
    GeneralMovementFailure = 71,
    YouCantJumpFromThisPosition = 72,
    CantJumpLoadedDown = 73,
    YouKilledYourself = 74,
    MsgResponseFailure = 75,
    ObjectIsStatic = 76,
    InvalidPkStatus = 77,
    InvalidXpAmount = 1001,
    InvalidPpCalculation = 1002,
    InvalidCpCalculation = 1003,
    UnhandledStatAnswer = 1004,
    HeartAttack = 1005,
    TheContainerIsClosed = 1006,
    InvalidInventoryLocation = 1008,
    ChangeCombatModeFailure = 1009,
    FullInventoryLocation = 1010,
    ConflictingInventoryLocation = 1011,
    ItemNotPending = 1012,
    BeWieldedFailure = 1013,
    BeDroppedFailure = 1014,
    YouAreTooFatiguedToAttack = 1015,
    YouAreOutOfAmmunition = 1016,
    YourAttackMisfired = 1017,
    YouveAttemptedAnImpossibleSpellPath = 1018,
    MagicIncompleteAnimList = 1019,
    MagicInvalidSpellType = 1020,
    MagicInqPositionAndVelocityFailure = 1021,
    YouDontKnowThatSpell = 1022,
    IncorrectTargetType = 1023,
    YouDontHaveAllTheComponents = 1024,
    YouDontHaveEnoughManaToCast = 1025,
    YourSpellFizzled = 1026,
    YourSpellTargetIsMissing = 1027,
    YourProjectileSpellMislaunched = 1028,
    MagicSpellbookAddSpellFailure = 1029,
    MagicTargetOutOfRange = 1030,
    YourSpellCannotBeCastOutside = 1031,
    YourSpellCannotBeCastInside = 1032,
    MagicGeneralFailure = 1033,
    YouAreUnpreparedToCastASpell = 1034,
    YouveAlreadySwornAllegiance = 1035,
    CantSwearAllegianceInsufficientXp = 1036,
    AllegianceIgnoringRequests = 1037,
    AllegianceSquelched = 1038,
    AllegianceMaxDistanceExceeded = 1039,
    AllegianceIllegalLevel = 1040,
    AllegianceBadCreation = 1041,
    AllegiancePatronBusy = 1042,
    YouAreNotInAllegiance = 1044,
    AllegianceRemoveHierarchyFailure = 1045,
    FellowshipIgnoringRequests = 1047,
    FellowshipSquelched = 1048,
    FellowshipMaxDistanceExceeded = 1049,
    FellowshipMember = 1050,
    FellowshipIllegalLevel = 1051,
    FellowshipRecruitBusy = 1052,
    YouMustBeLeaderOfFellowship = 1053,
    YourFellowshipIsFull = 1054,
    FellowshipNameIsNotPermitted = 1055,
    LevelTooLow = 1056,
    LevelTooHigh = 1057,
    ThatChannelDoesntExist = 1058,
    YouCantUseThatChannel = 1059,
    YouAreAlreadyOnThatChannel = 1060,
    YouAreNotOnThatChannel = 1061,
    AttunedItem = 1062,
    YouCannotMergeDifferentStacks = 1063,
    YouCannotMergeEnchantedItems = 1064,
    YouMustControlAtLeastOneStack = 1065,
    CurrentlyAttacking = 1066,
    MissileAttackNotOk = 1067,
    TargetNotAcquired = 1068,
    ImpossibleShot = 1069,
    BadWeaponSkill = 1070,
    UnwieldFailure = 1071,
    LaunchFailure = 1072,
    ReloadFailure = 1073,
    UnableToMakeCraftReq = 1074,
    CraftAnimationFailed = 1075,
    YouCantCraftWithThatNumberOfItems = 1076,
    CraftGeneralErrorUiMsg = 1077,
    CraftGeneralErrorNoUiMsg = 1078,
    YouDoNotPassCraftingRequirements = 1079,
    YouDoNotHaveAllTheNecessaryItems = 1080,
    NotAllTheItemsAreAvailable = 1081,
    YouMustBeInPeaceModeToTrade = 1082,
    YouAreNotTrainedInThatTradeSkill = 1083,
    YourHandsMustBeFree = 1084,
    YouCannotLinkToThatPortal = 1085,
    YouHaveSolvedThisQuestTooRecently = 1086,
    YouHaveSolvedThisQuestTooManyTimes = 1087,
    QuestUnknown = 1088,
    QuestTableCorrupt = 1089,
    QuestBad = 1090,
    QuestDuplicate = 1091,
    QuestUnsolved = 1092,
    ItemRequiresQuestToBePickedUp = 1093,
    QuestSolvedTooLongAgo = 1094,
    TradeIgnoringRequests = 1100,
    TradeSquelched = 1101,
    TradeMaxDistanceExceeded = 1102,
    TradeAlreadyTrading = 1103,
    TradeBusy = 1104,
    TradeClosed = 1105,
    TradeExpired = 1106,
    TradeItemBeingTraded = 1107,
    TradeNonEmptyContainer = 1108,
    TradeNonCombatMode = 1109,
    TradeIncomplete = 1110,
    TradeStampMismatch = 1111,
    TradeUnopened = 1112,
    TradeEmpty = 1113,
    TradeAlreadyAccepted = 1114,
    TradeOutOfSync = 1115,
    PKsMayNotUsePortal = 1116,
    NonPKsMayNotUsePortal = 1117,
    HouseAbandoned = 1118,
    HouseEvicted = 1119,
    HouseAlreadyOwned = 1120,
    HouseBuyFailed = 1121,
    HouseRentFailed = 1122,
    Hooked = 1123,
    MagicInvalidPosition = 1125,
    YouMustHaveDarkMajestyToUsePortal = 1126,
    InvalidAmmoType = 1127,
    SkillTooLow = 1128,
    YouHaveUsedAllTheHooks = 1129,
    TradeAiDoesntWant = 1130,
    HookHouseNotOwned = 1131,
    YouMustCompleteQuestToUsePortal = 1140,
    HouseNoAllegiance = 1150,
    YouMustOwnHouseToUseCommand = 1151,
    YourMonarchDoesNotOwnAMansionOrVilla = 1152,
    YourMonarchsHouseIsNotAMansionOrVilla = 1153,
    YourMonarchHasClosedTheMansion = 1154,
    YouMustBeMonarchToPurchaseDwelling = 1162,
    AllegianceTimeout = 1165,
    YourOfferOfAllegianceWasIgnored = 1166,
    ConfirmationInProgress = 1167,
    YouMustBeAMonarchToUseCommand = 1168,
    YouMustSpecifyCharacterToBoot = 1169,
    YouCantBootYourself = 1170,
    ThatCharacterDoesNotExist = 1171,
    ThatPersonIsNotInYourAllegiance = 1172,
    CantBreakFromPatronNotInAllegiance = 1173,
    YourAllegianceHasBeenDissolved = 1174,
    YourPatronsAllegianceHasBeenBroken = 1175,
    YouHaveMovedTooFar = 1176,
    TeleToInvalidPosition = 1177,
    MustHaveDarkMajestyToUse = 1178,
    YouFailToLinkWithLifestone = 1179,
    YouWanderedTooFarToLinkWithLifestone = 1180,
    YouSuccessfullyLinkWithLifestone = 1181,
    YouMustLinkToLifestoneToRecall = 1182,
    YouFailToRecallToLifestone = 1183,
    YouFailToLinkWithPortal = 1184,
    YouSuccessfullyLinkWithPortal = 1185,
    YouFailToRecallToPortal = 1186,
    YouMustLinkToPortalToRecall = 1187,
    YouFailToSummonPortal = 1188,
    YouMustLinkToPortalToSummonIt = 1189,
    YouFailToTeleport = 1190,
    YouHaveBeenTeleportedTooRecently = 1191,
    YouMustBeAnAdvocateToUsePortal = 1192,
    PortalAisNotAllowed = 1193,
    PlayersMayNotUsePortal = 1194,
    YouAreNotPowerfulEnoughToUsePortal = 1195,
    YouAreTooPowerfulToUsePortal = 1196,
    YouCannotRecallPortal = 1197,
    YouCannotSummonPortal = 1198,
    LockAlreadyUnlocked = 1199,
    YouCannotLockOrUnlockThat = 1200,
    YouCannotLockWhatIsOpen = 1201,
    KeyDoesntFitThisLock = 1202,
    LockUsedTooRecently = 1203,
    YouArentTrainedInLockpicking = 1204,
    AllegianceInfoEmptyName = 1205,
    AllegianceInfoSelf = 1206,
    AllegianceInfoTooRecent = 1207,
    AbuseNoSuchCharacter = 1208,
    AbuseReportedSelf = 1209,
    AbuseComplaintHandled = 1210,
    YouDoNotOwnThatSalvageTool = 1213,
    YouDoNotOwnThatItem = 1214,
    MaterialCannotBeCreated = 1217,
    ItemsAttemptingToSalvageIsInvalid = 1218,
    YouCannotSalvageItemsInTrading = 1219,
    YouMustBeHouseGuestToUsePortal = 1220,
    YourAllegianceRankIsTooLowToUseMagic = 1221,
    YourArcaneLoreIsTooLowToUseMagic = 1223,
    ItemDoesntHaveEnoughMana = 1224,
    YouHaveBeenInPKBattleTooRecently = 1228,
    TradeAiRefuseEmote = 1229,
    YouFailToAlterSkill = 1232,
    FellowshipDeclined = 1243,
    FellowshipTimeout = 1244,
    YouHaveFailedToAlterAttributes = 1245,
    CannotTransferAttributesWhileWieldingItem = 1248,
    YouHaveSucceededTransferringAttributes = 1249,
    HookIsDuplicated = 1250,
    ItemIsWrongTypeForHook = 1251,
    HousingChestIsDuplicated = 1252,
    HookWillBeDeleted = 1253,
    HousingChestWillBeDeleted = 1254,
    CannotSwearAllegianceWhileOwningMansion = 1255,
    YouCantDoThatWhileInTheAir = 1259,
    CannotChangePKStatusWhileRecovering = 1260,
    AdvocatesCannotChangePKStatus = 1261,
    LevelTooLowToChangePKStatusWithObject = 1262,
    LevelTooHighToChangePKStatusWithObject = 1263,
    YouFeelAHarshDissonance = 1264,
    YouArePKAgain = 1265,
    YouAreTemporarilyNoLongerPK = 1266,
    PKLiteMayNotUsePortal = 1267,
    YouArentTrainedInHealing = 1276,
    YouDontOwnThatHealingKit = 1277,
    YouCantHealThat = 1278,
    YouArentReadyToHeal = 1280,
    YouCanOnlyHealPlayers = 1281,
    LifestoneMagicProtectsYou = 1282,
    PortalEnergyProtectsYou = 1283,
    YouAreNonPKAgain = 1284,
    YoureTooCloseToYourSanctuary = 1285,
    CantDoThatTradeInProgress = 1286,
    OnlyNonPKsMayEnterPKLite = 1287,
    YouAreNowPKLite = 1288,
    YouDoNotBelongToAFellowship = 1295,
    UsingMaxHooksSilent = 1297,
    YouAreNowUsingMaxHooks = 1298,
    YouAreNoLongerUsingMaxHooks = 1299,
    YouAreNotPermittedToUseThatHook = 1302,
    LockedFellowshipCannotRecruitYou = 1305,
    ActivationNotAllowedNotOwner = 1306,
    TurbineChatIsEnabled = 1309,
    YouCannotAddPeopleToHearList = 1312,
    YouAreNowDeafTo_Screams = 1315,
    YouCanHearAllPlayersOnceAgain = 1316,
    YouChickenOut = 1318,
    YouCanPossiblySucceed = 1319,
    FellowshipIsLocked = 1320,
    TradeComplete = 1321,
    NotASalvageTool = 1322,
    CharacterNotAvailable = 1323,
    YouMustWaitToPurchaseHouse = 1330,
    YouDoNotHaveAuthorityInAllegiance = 1333,
    YouHaveMaxAccountsBanned = 1344,
    YouHaveMaxAllegianceOfficers = 1349,
    YourAllegianceOfficersHaveBeenCleared = 1350,
    YouCannotJoinChannelsWhileGagged = 1352,
    YouAreNoLongerAllegianceOfficer = 1354,
    YourAllegianceDoesNotHaveHometown = 1356,
    HookItemNotUsable_CannotOpen = 1358,
    HookItemNotUsable_CanOpen = 1359,
    MissileOutOfRange = 1360,
    MustPurchaseThroneOfDestinyToUseFunction = 1362,
    MustPurchaseThroneOfDestinyToUseItem = 1363,
    MustPurchaseThroneOfDestinyToUsePortal = 1364,
    MustPurchaseThroneOfDestinyToAccessQuest = 1365,
    YouFailedToCompleteAugmentation = 1366,
    AugmentationUsedTooManyTimes = 1367,
    AugmentationTypeUsedTooManyTimes = 1368,
    AugmentationNotEnoughExperience = 1369,
    ExitTrainingAcademyToUseCommand = 1373,
    OnlyPKsMayUseCommand = 1375,
    OnlyPKLiteMayUseCommand = 1376,
    MaxFriendsExceeded = 1377,
    ThatCharacterNotOnYourFriendsList = 1379,
    OnlyHouseOwnerCanUseCommand = 1380,
    InvalidAllegianceNameCantBeEmpty = 1381,
    InvalidAllegianceNameTooLong = 1382,
    InvalidAllegianceNameBadCharacters = 1383,
    InvalidAllegianceNameInappropriate = 1384,
    InvalidAllegianceNameAlreadyInUse = 1385,
    AllegianceNameCleared = 1387,
    InvalidAllegianceNameSameName = 1388,
    InvalidOfficerLevel = 1391,
    AllegianceOfficerTitleIsNotAppropriate = 1392,
    AllegianceNameIsTooLong = 1393,
    AllegianceOfficerTitlesCleared = 1394,
    AllegianceTitleHasIllegalChars = 1395,
    YouHaveNotPreApprovedVassals = 1401,
    YouHaveClearedPreApprovedVassal = 1404,
    CharIsAlreadyGagged = 1405,
    CharIsNotCurrentlyGagged = 1406,
    YourAllegianceChatPrivilegesRestored = 1409,
    TooManyUniqueItems = 1412,
    HeritageRequiresSpecificArmor = 1413,
    ArmorRequiresSpecificHeritage = 1414,
    OlthoiCannotInteractWithThat = 1415,
    OlthoiCannotUseLifestones = 1416,
    OlthoiVendorLooksInHorror = 1417,
    OlthoiCannotJoinFellowship = 1419,
    OlthoiCannotJoinAllegiance = 1420,
    YouCannotUseThatItem = 1421,
    ThisPersonWillNotInteractWithYou = 1422,
    OnlyOlthoiMayUsePortal = 1423,
    OlthoiMayNotUsePortal = 1424,
    YouMayNotUsePortalWithVitae = 1425,
    YouMustBeTwoWeeksOldToUsePortal = 1426,
    OlthoiCanOnlyRecallToLifestone = 1427,
    ContractError = 1428
}
/*The PositionFlags value defines the fields present in the Position structure.*/
enum PositionFlags {
    /*velocity vector is present*/
    HasVelocity = 1,
    /*placement id is present*/
    HasPlacementId = 2,
    /*object is grounded*/
    IsGrounded = 4,
    /*orientation quaternion has no w component*/
    OrientationHasNoW = 8,
    /*orientation quaternion has no x component*/
    OrientationHasNoX = 16,
    /*orientation quaternion has no y component*/
    OrientationHasNoY = 32,
    /*orientation quaternion has no z component*/
    OrientationHasNoZ = 64
}
/*Height of the attack.  TODO these need to be verified.*/
enum AttackHeight {
    High = 1,
    Medium = 2,
    Low = 3
}
/*Container properties of an item*/
enum ContainerProperties {
    None = 0,
    Container = 1,
    Foci = 2
}
enum AttackType {
    Undef = 0,
    Punch = 1,
    Thrust = 2,
    Slash = 4,
    Kick = 8,
    OffhandPunch = 16,
    DoubleSlash = 32,
    TripleSlash = 64,
    DoubleThrust = 128,
    TripleThrust = 256,
    OffhandThrust = 512,
    OffhandSlash = 1024,
    OffhandDoubleSlash = 2048,
    OffhandTripleSlash = 4096,
    OffhandDoubleThrust = 8192,
    OffhandTripleThrust = 16384
}
/*The objects type information*/
enum ItemType {
    MeleeWeapon = 1,
    Armor = 2,
    Clothing = 4,
    Jewelry = 8,
    Creature = 16,
    Food = 32,
    Money = 64,
    Misc = 128,
    MissileWeapon = 256,
    Container = 512,
    Useless = 1024,
    Gem = 2048,
    SpellComponents = 4096,
    Writable = 8192,
    Key = 16384,
    Caster = 32768,
    Portal = 65536,
    Lockable = 131072,
    PromissoryNote = 262144,
    ManaStone = 524288,
    Service = 1048576,
    MagicWieldable = 2097152,
    CraftCookingBase = 4194304,
    CraftAlchemyBase = 8388608,
    CraftFletchingBase = 33554432,
    CraftAlchemyIntermediate = 67108864,
    CraftFletchingIntermediate = 134217728,
    LifeStone = 268435456,
    TinkeringTool = 536870912,
    TinkeringMaterial = 1073741824,
    Gameboard = 2147483648
}
/*The Skill identifies a specific Character skill.*/
enum SkillId {
    Axe = 1,
    Bow = 2,
    Crossbow = 3,
    Dagger = 4,
    Mace = 5,
    MeleeDefense = 6,
    MissileDefense = 7,
    Sling = 8,
    Spear = 9,
    Staff = 10,
    Sword = 11,
    ThrownWeapons = 12,
    UnarmedCombat = 13,
    ArcaneLore = 14,
    MagicDefense = 15,
    ManaConversion = 16,
    Spellcraft = 17,
    ItemTinkering = 18,
    AssessPerson = 19,
    Deception = 20,
    Healing = 21,
    Jump = 22,
    Lockpick = 23,
    Run = 24,
    Awareness = 25,
    ArmorRepair = 26,
    AssessCreature = 27,
    WeaponTinkering = 28,
    ArmorTinkering = 29,
    MagicItemTinkering = 30,
    CreatureEnchantment = 31,
    ItemEnchantment = 32,
    LifeMagic = 33,
    WarMagic = 34,
    Leadership = 35,
    Loyalty = 36,
    Fletching = 37,
    Alchemy = 38,
    Cooking = 39,
    Salvaging = 40,
    TwoHandedCombat = 41,
    Gearcraft = 42,
    VoidMagic = 43,
    HeavyWeapons = 44,
    LightWeapons = 45,
    FinesseWeapons = 46,
    MissleWeapons = 47,
    DualWield = 49,
    Recklessness = 50,
    SneakAttack = 51,
    DirtyFighting = 52,
    Challenge = 53,
    Summoning = 54
}
/*The SkillAdvancementClass identifies whether a skill is untrained, trained or specialized.*/
enum SkillAdvancementClass {
    Untrained = 1,
    Trained = 2,
    Specialized = 3
}
enum PropertyAttribute2nd {
    Undef = 0,
    MaxHealth = 1,
    Health = 2,
    MaxStamina = 3,
    Stamina = 4,
    MaxMana = 5,
    Mana = 6
}
/*The EmoteType identifies the type of emote action*/
enum EmoteType {
    Invalid_EmoteType = 0,
    Invalid_VendorEmoteType = 0,
    Act_EmoteType = 1,
    AwardXP_EmoteType = 2,
    Give_EmoteType = 3,
    MoveHome_EmoteType = 4,
    Motion_EmoteType = 5,
    Move_EmoteType = 6,
    PhysScript_EmoteType = 7,
    Say_EmoteType = 8,
    Sound_EmoteType = 9,
    Tell_EmoteType = 10,
    Turn_EmoteType = 11,
    TurnToTarget_EmoteType = 12,
    TextDirect_EmoteType = 13,
    CastSpell_EmoteType = 14,
    Activate_EmoteType = 15,
    WorldBroadcast_EmoteType = 16,
    LocalBroadcast_EmoteType = 17,
    DirectBroadcast_EmoteType = 18,
    CastSpellInstant_EmoteType = 19,
    UpdateQuest_EmoteType = 20,
    InqQuest_EmoteType = 21,
    StampQuest_EmoteType = 22,
    StartEvent_EmoteType = 23,
    StopEvent_EmoteType = 24,
    BLog_EmoteType = 25,
    AdminSpam_EmoteType = 26,
    TeachSpell_EmoteType = 27,
    AwardSkillXP_EmoteType = 28,
    AwardSkillPoints_EmoteType = 29,
    InqQuestSolves_EmoteType = 30,
    EraseQuest_EmoteType = 31,
    DecrementQuest_EmoteType = 32,
    IncrementQuest_EmoteType = 33,
    AddCharacterTitle_EmoteType = 34,
    InqBoolStat_EmoteType = 35,
    InqIntStat_EmoteType = 36,
    InqFloatStat_EmoteType = 37,
    InqStringStat_EmoteType = 38,
    InqAttributeStat_EmoteType = 39,
    InqRawAttributeStat_EmoteType = 40,
    InqSecondaryAttributeStat_EmoteType = 41,
    InqRawSecondaryAttributeStat_EmoteType = 42,
    InqSkillStat_EmoteType = 43,
    InqRawSkillStat_EmoteType = 44,
    InqSkillTrained_EmoteType = 45,
    InqSkillSpecialized_EmoteType = 46,
    AwardTrainingCredits_EmoteType = 47,
    InflictVitaePenalty_EmoteType = 48,
    AwardLevelProportionalXP_EmoteType = 49,
    AwardLevelProportionalSkillXP_EmoteType = 50,
    InqEvent_EmoteType = 51,
    ForceMotion_EmoteType = 52,
    SetIntStat_EmoteType = 53,
    IncrementIntStat_EmoteType = 54,
    DecrementIntStat_EmoteType = 55,
    CreateTreasure_EmoteType = 56,
    ResetHomePosition_EmoteType = 57,
    InqFellowQuest_EmoteType = 58,
    InqFellowNum_EmoteType = 59,
    UpdateFellowQuest_EmoteType = 60,
    StampFellowQuest_EmoteType = 61,
    AwardNoShareXP_EmoteType = 62,
    SetSanctuaryPosition_EmoteType = 63,
    TellFellow_EmoteType = 64,
    FellowBroadcast_EmoteType = 65,
    LockFellow_EmoteType = 66,
    Goto_EmoteType = 67,
    PopUp_EmoteType = 68,
    SetBoolStat_EmoteType = 69,
    SetQuestCompletions_EmoteType = 70,
    InqNumCharacterTitles_EmoteType = 71,
    Generate_EmoteType = 72,
    PetCastSpellOnOwner_EmoteType = 73,
    TakeItems_EmoteType = 74,
    InqYesNo_EmoteType = 75,
    InqOwnsItems_EmoteType = 76,
    DeleteSelf_EmoteType = 77,
    KillSelf_EmoteType = 78,
    UpdateMyQuest_EmoteType = 79,
    InqMyQuest_EmoteType = 80,
    StampMyQuest_EmoteType = 81,
    InqMyQuestSolves_EmoteType = 82,
    EraseMyQuest_EmoteType = 83,
    DecrementMyQuest_EmoteType = 84,
    IncrementMyQuest_EmoteType = 85,
    SetMyQuestCompletions_EmoteType = 86,
    MoveToPos_EmoteType = 87,
    LocalSignal_EmoteType = 88,
    InqPackSpace_EmoteType = 89,
    RemoveVitaePenalty_EmoteType = 90,
    SetEyeTexture_EmoteType = 91,
    SetEyePalette_EmoteType = 92,
    SetNoseTexture_EmoteType = 93,
    SetNosePalette_EmoteType = 94,
    SetMouthTexture_EmoteType = 95,
    SetMouthPalette_EmoteType = 96,
    SetHeadObject_EmoteType = 97,
    SetHeadPalette_EmoteType = 98,
    TeleportTarget_EmoteType = 99,
    TeleportSelf_EmoteType = 100,
    StartBarber_EmoteType = 101,
    InqQuestBitsOn_EmoteType = 102,
    InqQuestBitsOff_EmoteType = 103,
    InqMyQuestBitsOn_EmoteType = 104,
    InqMyQuestBitsOff_EmoteType = 105,
    SetQuestBitsOn_EmoteType = 106,
    SetQuestBitsOff_EmoteType = 107,
    SetMyQuestBitsOn_EmoteType = 108,
    SetMyQuestBitsOff_EmoteType = 109,
    UntrainSkill_EmoteType = 110,
    SetAltRacialSkills_EmoteType = 111,
    SpendLuminance_EmoteType = 112,
    AwardLuminance_EmoteType = 113,
    InqInt64Stat_EmoteType = 114,
    SetInt64Stat_EmoteType = 115,
    OpenMe_EmoteType = 116,
    CloseMe_EmoteType = 117,
    SetFloatStat_EmoteType = 118,
    AddContract_EmoteType = 119,
    RemoveContract_EmoteType = 120,
    InqContractsFull_EmoteType = 121
}
/*The EmoteCategory identifies the category of an emote.*/
enum EmoteCategory {
    Invalid_EmoteCategory = 0,
    Refuse_EmoteCategory = 1,
    Vendor_EmoteCategory = 2,
    Death_EmoteCategory = 3,
    Portal_EmoteCategory = 4,
    HeartBeat_EmoteCategory = 5,
    Give_EmoteCategory = 6,
    Use_EmoteCategory = 7,
    Activation_EmoteCategory = 8,
    Generation_EmoteCategory = 9,
    PickUp_EmoteCategory = 10,
    Drop_EmoteCategory = 11,
    QuestSuccess_EmoteCategory = 12,
    QuestFailure_EmoteCategory = 13,
    Taunt_EmoteCategory = 14,
    WoundedTaunt_EmoteCategory = 15,
    KillTaunt_EmoteCategory = 16,
    NewEnemy_EmoteCategory = 17,
    Scream_EmoteCategory = 18,
    Homesick_EmoteCategory = 19,
    ReceiveCritical_EmoteCategory = 20,
    ResistSpell_EmoteCategory = 21,
    TestSuccess_EmoteCategory = 22,
    TestFailure_EmoteCategory = 23,
    HearChat_EmoteCategory = 24,
    Wield_EmoteCategory = 25,
    UnWield_EmoteCategory = 26,
    EventSuccess_EmoteCategory = 27,
    EventFailure_EmoteCategory = 28,
    TestNoQuality_EmoteCategory = 29,
    QuestNoFellow_EmoteCategory = 30,
    TestNoFellow_EmoteCategory = 31,
    GotoSet_EmoteCategory = 32,
    NumFellowsSuccess_EmoteCategory = 33,
    NumFellowsFailure_EmoteCategory = 34,
    NumCharacterTitlesSuccess_EmoteCategory = 35,
    NumCharacterTitlesFailure_EmoteCategory = 36,
    ReceiveLocalSignal_EmoteCategory = 37,
    ReceiveTalkDirect_EmoteCategory = 38
}
/*The CharacterOptions1 word contains character options.*/
enum CharacterOptions1 {
    AutoRepeatAttack = 2,
    IgnoreAllegianceRequests = 4,
    IgnoreFellowshipRequests = 8,
    NotUsed2 = 16,
    NotUsed3 = 32,
    AllowGive = 64,
    ViewCombatTarget = 128,
    ShowTooltips = 256,
    UseDeception = 512,
    ToggleRun = 1024,
    StayInChatMode = 2048,
    AdvancedCombatUI = 4096,
    AutoTarget = 8192,
    NotUsed4 = 16384,
    VividTargetingIndicator = 32768,
    DisableMostWeatherEffects = 65536,
    IgnoreTradeRequests = 131072,
    FellowshipShareXP = 262144,
    AcceptLootPermits = 524288,
    FellowshipShareLoot = 1048576,
    SideBySideVitals = 2097152,
    CoordinatesOnRadar = 4194304,
    SpellDuration = 8388608,
    NotUsed5 = 16777216,
    DisableHouseRestrictionEffects = 33554432,
    DragItemOnPlayerOpensSecureTrade = 67108864,
    DisplayAllegianceLogonNotifications = 134217728,
    UseChargeAttack = 268435456,
    AutoAcceptFellowRequest = 536870912,
    HearAllegianceChat = 1073741824,
    UseCraftSuccessDialog = 2147483648
}
/*The CharacterOptions2 word contains additional character options.*/
enum CharacterOptions2 {
    PersistentAtDay = 1,
    DisplayDateOfBirth = 2,
    DisplayChessRank = 4,
    DisplayFishingSkill = 8,
    DisplayNumberDeaths = 16,
    DisplayAge = 32,
    TimeStamp = 64,
    SalvageMultiple = 128,
    HearGeneralChat = 256,
    HearTradeChat = 512,
    HearLFGChat = 1024,
    HearRoleplayChat = 2048,
    AppearOffline = 4096,
    DisplayNumberCharacterTitles = 8192,
    MainPackPreferred = 16384,
    LeadMissileTargets = 32768,
    UseFastMissiles = 65536,
    FilterLanguage = 131072,
    ConfirmVolatileRareUse = 262144,
    HearSocietyChat = 524288,
    ShowHelm = 1048576,
    DisableDistanceFog = 2097152,
    UseMouseTurning = 4194304,
    ShowCloak = 8388608,
    LockUI = 16777216,
    HearPKDeath = 33554432
}
/*The various options for filtering the spellbook*/
enum SpellBookFilterOptions {
    None = 0,
    Creature = 1,
    Item = 2,
    Life = 4,
    War = 8,
    Level1 = 16,
    Level2 = 32,
    Level3 = 64,
    Level4 = 128,
    Level5 = 256,
    Level6 = 512,
    Level7 = 1024,
    Level8 = 2048,
    Level9 = 4096,
    Void = 8192
}
/*The EquipMask value describes the equipment slots an item uses.*/
enum EquipMask {
    Head = 1,
    ChestUnderwear = 2,
    AbdomenUnderwear = 4,
    UpperArmsUnderwear = 8,
    LowerArmsUnderwear = 16,
    Hands = 32,
    UpperLegsUnderwear = 64,
    LowerLegsUnderwear = 128,
    Feet = 256,
    Chest = 512,
    Abdomen = 1024,
    UpperArms = 2048,
    LowerArms = 4096,
    UpperLegs = 8192,
    LowerLegs = 16384,
    Necklace = 32768,
    RightBracelet = 65536,
    LeftBracelet = 131072,
    RightRing = 262144,
    LeftRing = 524288,
    MeleeWeapon = 1048576,
    Shield = 2097152,
    MissileWeapon = 4194304,
    Ammunition = 8388608,
    Wand = 16777216
}
/*The type of the friend change event.*/
enum FriendsUpdateType {
    Full = 0,
    Added = 1,
    Removed = 2,
    LoginChange = 4
}
/*The permission levels that can be given to an allegiance officer*/
enum AllegianceOfficerLevel {
    Speaker = 1,
    Seneschal = 2,
    Castellan = 3
}
/*Actions related to /allegiance lock*/
enum AllegianceLockAction {
    LockedOff = 1,
    LockedOn = 2,
    ToggleLocked = 3,
    CheckLocked = 4,
    DisplayBypass = 5,
    ClearBypass = 6
}
/*Actions related to /allegiance house*/
enum AllegianceHouseAction {
    Help = 1,
    GuestOpen = 2,
    GuestClosed = 3,
    StorageOpen = 4,
    StorageClosed = 5
}
/*The AttributeId identifies a specific Character attribute.*/
enum AttributeId {
    Strength = 1,
    Endurance = 2,
    Quickness = 3,
    Coordination = 4,
    Focus = 5,
    Self = 6
}
/*The VitalId identifies a specific Character vital (secondary attribute).*/
enum VitalId {
    MaximumHealth = 1,
    MaximumStamina = 3,
    MaximumMana = 5
}
/*The CurVitalId identifies a specific Character vital (secondary attribute).*/
enum CurVitalId {
    CurrentHealth = 2,
    CurrentStamina = 4,
    CurrentMana = 6
}
/*The combat mode for a character or monster.*/
enum CombatMode {
    NonCombat = 1,
    Melee = 2,
    Missle = 4,
    Magic = 8
}
enum Sound {
    Invalid = 0,
    Speak1 = 1,
    Random = 2,
    Attack1 = 3,
    Attack2 = 4,
    Attack3 = 5,
    SpecialAttack1 = 6,
    SpecialAttack2 = 7,
    SpecialAttack3 = 8,
    Damage1 = 9,
    Damage2 = 10,
    Damage3 = 11,
    Wound1 = 12,
    Wound2 = 13,
    Wound3 = 14,
    Death1 = 15,
    Death2 = 16,
    Death3 = 17,
    Grunt1 = 18,
    Grunt2 = 19,
    Grunt3 = 20,
    Oh1 = 21,
    Oh2 = 22,
    Oh3 = 23,
    Heave1 = 24,
    Heave2 = 25,
    Heave3 = 26,
    Knockdown1 = 27,
    Knockdown2 = 28,
    Knockdown3 = 29,
    Swoosh1 = 30,
    Swoosh2 = 31,
    Swoosh3 = 32,
    Thump1 = 33,
    Smash1 = 34,
    Scratch1 = 35,
    Spear = 36,
    Sling = 37,
    Dagger = 38,
    ArrowWhiz1 = 39,
    ArrowWhiz2 = 40,
    CrossbowPull = 41,
    CrossbowRelease = 42,
    BowPull = 43,
    BowRelease = 44,
    ThrownWeaponRelease1 = 45,
    ArrowLand = 46,
    Collision = 47,
    HitFlesh1 = 48,
    HitLeather1 = 49,
    HitChain1 = 50,
    HitPlate1 = 51,
    HitMissile1 = 52,
    HitMissile2 = 53,
    HitMissile3 = 54,
    Footstep1 = 55,
    Footstep2 = 56,
    Walk1 = 57,
    Dance1 = 58,
    Dance2 = 59,
    Dance3 = 60,
    Hidden1 = 61,
    Hidden2 = 62,
    Hidden3 = 63,
    Eat1 = 64,
    Drink1 = 65,
    Open = 66,
    Close = 67,
    OpenSlam = 68,
    CloseSlam = 69,
    Ambient1 = 70,
    Ambient2 = 71,
    Ambient3 = 72,
    Ambient4 = 73,
    Ambient5 = 74,
    Ambient6 = 75,
    Ambient7 = 76,
    Ambient8 = 77,
    Waterfall = 78,
    LogOut = 79,
    LogIn = 80,
    LifestoneOn = 81,
    AttribUp = 82,
    AttribDown = 83,
    SkillUp = 84,
    SkillDown = 85,
    HealthUp = 86,
    HealthDown = 87,
    ShieldUp = 88,
    ShieldDown = 89,
    EnchantUp = 90,
    EnchantDown = 91,
    VisionUp = 92,
    VisionDown = 93,
    Fizzle = 94,
    Launch = 95,
    Explode = 96,
    TransUp = 97,
    TransDown = 98,
    BreatheFlaem = 99,
    BreatheAcid = 100,
    BreatheFrost = 101,
    BreatheLightning = 102,
    Create = 103,
    Destroy = 104,
    Lockpicking = 105,
    UI_EnterPortal = 106,
    UI_ExitPortal = 107,
    UI_GeneralQuery = 108,
    UI_GeneralError = 109,
    UI_TransientMessage = 110,
    UI_IconPickUp = 111,
    UI_IconSuccessfulDrop = 112,
    UI_IconInvalid_Drop = 113,
    UI_ButtonPress = 114,
    UI_GrabSlider = 115,
    UI_ReleaseSlider = 116,
    UI_NewTargetSelected = 117,
    UI_Roar = 118,
    UI_Bell = 119,
    UI_Chant1 = 120,
    UI_Chant2 = 121,
    UI_DarkWhispers1 = 122,
    UI_DarkWhispers2 = 123,
    UI_DarkLaugh = 124,
    UI_DarkWind = 125,
    UI_DarkSpeech = 126,
    UI_Drums = 127,
    UI_GhostSpeak = 128,
    UI_Breathing = 129,
    UI_Howl = 130,
    UI_LostSouls = 131,
    UI_Squeal = 132,
    UI_Thunder1 = 133,
    UI_Thunder2 = 134,
    UI_Thunder3 = 135,
    UI_Thunder4 = 136,
    UI_Thunder5 = 137,
    UI_Thunder6 = 138,
    RaiseTrait = 139,
    WieldObject = 140,
    UnwieldObject = 141,
    ReceiveItem = 142,
    PickUpItem = 143,
    DropItem = 144,
    ResistSpell = 145,
    PicklockFail = 146,
    LockSuccess = 147,
    OpenFailDueToLock = 148,
    TriggerActivated = 149,
    SpellExpire = 150,
    ItemManaDepleted = 151,
    TriggerActivated1 = 152,
    TriggerActivated2 = 153,
    TriggerActivated3 = 154,
    TriggerActivated4 = 155,
    TriggerActivated5 = 156,
    TriggerActivated6 = 157,
    TriggerActivated7 = 158,
    TriggerActivated8 = 159,
    TriggerActivated9 = 160,
    TriggerActivated10 = 161,
    TriggerActivated11 = 162,
    TriggerActivated12 = 163,
    TriggerActivated13 = 164,
    TriggerActivated14 = 165,
    TriggerActivated15 = 166,
    TriggerActivated16 = 167,
    TriggerActivated17 = 168,
    TriggerActivated18 = 169,
    TriggerActivated19 = 170,
    TriggerActivated20 = 171,
    TriggerActivated21 = 172,
    TriggerActivated22 = 173,
    TriggerActivated23 = 174,
    TriggerActivated24 = 175,
    TriggerActivated25 = 176,
    TriggerActivated26 = 177,
    TriggerActivated27 = 178,
    TriggerActivated28 = 179,
    TriggerActivated29 = 180,
    TriggerActivated30 = 181,
    TriggerActivated31 = 182,
    TriggerActivated32 = 183,
    TriggerActivated33 = 184,
    TriggerActivated34 = 185,
    TriggerActivated35 = 186,
    TriggerActivated36 = 187,
    TriggerActivated37 = 188,
    TriggerActivated38 = 189,
    TriggerActivated39 = 190,
    TriggerActivated40 = 191,
    TriggerActivated41 = 192,
    TriggerActivated42 = 193,
    TriggerActivated43 = 194,
    TriggerActivated44 = 195,
    TriggerActivated45 = 196,
    TriggerActivated46 = 197,
    TriggerActivated47 = 198,
    TriggerActivated48 = 199,
    TriggerActivated49 = 200,
    TriggerActivated50 = 201,
    HealthDownVoid = 202,
    RegenDownVoid = 203,
    SkillDownVoid = 204
}
/*The ChatFragmentType categorizes chat window messages to control color and filtering.*/
enum ChatFragmentType {
    Default = 0,
    Speech = 2,
    Tell = 3,
    OutgoingTell = 4,
    System = 5,
    Combat = 6,
    Magic = 7,
    Channels = 8,
    OutgoingChannel = 9,
    Social = 10,
    OutgoingSocial = 11,
    Emote = 12,
    Advancement = 13,
    Abuse = 14,
    Help = 15,
    Appraisal = 16,
    Spellcasting = 17,
    Allegiance = 18,
    Fellowship = 19,
    WorldBroadcast = 20,
    CombatEnemy = 21,
    CombatSelf = 22,
    Recall = 23,
    Craft = 24,
    Salvaging = 25,
    AdminTell = 31
}
/*Flags related to the use of the item.*/
enum ObjectDescriptionFlag {
    /*can be opened (false if locked)*/
    Openable = 1,
    /*inscribable*/
    Inscribable = 2,
    /*cannot be picked up*/
    Stuck = 4,
    /*player*/
    Player = 8,
    /*attackable*/
    Attackable = 16,
    /*player killer*/
    PlayerKiller = 32,
    /*hidden admin*/
    HiddenAdmin = 64,
    /*hidden*/
    UiHidden = 128,
    /*book*/
    Book = 256,
    /*merchant*/
    Vendor = 512,
    /*pk altar*/
    PkSwitch = 1024,
    /*npk altar*/
    NpkSwitch = 2048,
    /*door*/
    Door = 4096,
    /*corpse*/
    Corpse = 8192,
    /*lifestone*/
    LifeStone = 16384,
    /*food*/
    Food = 32768,
    /*healing kit*/
    Healer = 65536,
    /*lockpick*/
    Lockpick = 131072,
    /*portal*/
    Portal = 262144,
    /*admin*/
    Admin = 1048576,
    /*free pk status*/
    FreePkStatus = 2097152,
    /*immute cell restrictions*/
    ImmuneCellRestrictions = 4194304,
    /*requires pack slot*/
    RequiresPackSlot = 8388608,
    /*retained*/
    Retained = 16777216,
    /*pklite status*/
    PkLiteStatus = 33554432,
    /*has an extra flags DWORD*/
    IncludesSecondHeader = 67108864,
    /*bindstone*/
    BindStone = 134217728,
    /*volatile rare*/
    VolatileRare = 268435456,
    /*wield on use*/
    WieldOnUse = 536870912,
    /*wield left*/
    WieldLeft = 1073741824
}
/*The AmmoType value describes the type of ammunition a missile weapon uses.*/
enum AmmoType {
    ThrownWeapon = 0,
    Arrow = 1,
    Bolt = 2,
    Dart = 4
}
/*The useablilty flags of the object*/
enum Usable {
    /*source not usable*/
    SourceUnusable = 1,
    /*source self*/
    SourceSelf = 2,
    /*source usable while wielded*/
    SourceWielded = 4,
    /*source usable while contained (owned by player)*/
    SourceContained = 8,
    /*source usable while viewed*/
    SourceViewed = 16,
    /*source usable while remote*/
    SourceRemote = 32,
    /*source don't approach*/
    SourceNoApproach = 64,
    /*source object self*/
    SourceObjectSelf = 128,
    /*target not usable*/
    TargetUnusable = 65536,
    /*target self*/
    TargetSelf = 131072,
    /*target usable while wielded*/
    TargetWielded = 262144,
    /*target usable while contained (owned by player)*/
    TargetContained = 524288,
    /*target usable while viewed*/
    TargetViewed = 1048576,
    /*target usable while remote*/
    TargetRemote = 2097152,
    /*target don't approach*/
    TargetNoApproach = 4194304,
    /*target object self*/
    TargetObjectSelf = 8388608
}
/*The CoverageMask value describes what parts of the body an item protects.*/
enum CoverageMask {
    UpperLegsUnderwear = 2,
    LowerLegsUnderwear = 4,
    ChestUnderwear = 8,
    AbdomenUnderwear = 16,
    UpperArmsUnderwear = 32,
    LowerArmsUnderwear = 64,
    UpperLegs = 256,
    LowerLegs = 512,
    Chest = 1024,
    Abdomen = 2048,
    UpperArms = 4096,
    LowerArms = 8192,
    Head = 16384,
    Hands = 32768,
    Feet = 65536
}
/*The HookType identifies the types of dwelling hooks.*/
enum HookType {
    Floor = 1,
    Wall = 2,
    Ceiling = 4,
    Yard = 8,
    Roof = 16
}
/*The MaterialType identifies the material an object is made of.*/
enum MaterialType {
    Ceramic = 1,
    Porcelain = 2,
    Linen = 4,
    Satin = 5,
    Silk = 6,
    Velvet = 7,
    Wool = 8,
    Agate = 10,
    Amber = 11,
    Amethyst = 12,
    Aquamarine = 13,
    Azurite = 14,
    BlackGarnet = 15,
    BlackOpal = 16,
    Bloodstone = 17,
    Carnelian = 18,
    Citrine = 19,
    Diamond = 20,
    Emerald = 21,
    FireOpal = 22,
    GreenGarnet = 23,
    GreenJade = 24,
    Hematite = 25,
    ImperialTopaz = 26,
    Jet = 27,
    LapisLazuli = 28,
    LavenderJade = 29,
    Malachite = 30,
    Moonstone = 31,
    Onyx = 32,
    Opal = 33,
    Peridot = 34,
    RedGarnet = 35,
    RedJade = 36,
    RoseQuartz = 37,
    Ruby = 38,
    Sapphire = 39,
    SmokeyQuartz = 40,
    Sunstone = 41,
    TigerEye = 42,
    Tourmaline = 43,
    Turquoise = 44,
    WhiteJade = 45,
    WhiteQuartz = 46,
    WhiteSapphire = 47,
    YellowGarnet = 48,
    YellowTopaz = 49,
    Zircon = 50,
    Ivory = 51,
    Leather = 52,
    ArmoredilloHide = 53,
    GromnieHide = 54,
    ReedSharkHide = 55,
    Brass = 57,
    Bronze = 58,
    Copper = 59,
    Gold = 60,
    Iron = 61,
    Pyreal = 62,
    Silver = 63,
    Steel = 64,
    Alabaster = 66,
    Granite = 67,
    Marble = 68,
    Obsidian = 69,
    Sandstone = 70,
    Serpentine = 71,
    Ebony = 73,
    Mahogany = 74,
    Oak = 75,
    Pine = 76,
    Teak = 77
}
/*The ConfirmationType identifies the specific confirmation panel to be displayed.*/
enum ConfirmationType {
    /*Swear Allegiance Request*/
    SwearAllegiance = 1,
    /*Alter Skill Confirmation Request*/
    AlterSkill = 2,
    /*Alter Attribute Confirmation Request*/
    AlterAttribute = 3,
    /*Fellowship Request*/
    Fellowship = 4,
    /*Craft Interaction Confirmation Request*/
    Craft = 5,
    /*Augmentation Confirmation Request*/
    Augmentation = 6,
    /*Yes/No Confirmation Request*/
    YesNo = 7
}
/*The EnvrionChangeType identifies the environment option set.*/
enum EnvrionChangeType {
    /*Removes all overrides*/
    Clear = 0,
    /*Sets Red Fog*/
    RedFog = 1,
    /*Sets Blue Fog*/
    BlueFog = 2,
    /*Sets White Fog*/
    WhiteFog = 3,
    /*Sets Green Fog*/
    GreenFog = 4,
    /*Sets Black Fog*/
    BlackFog = 5,
    /*Sets Black Fog*/
    BlackFog2 = 6,
    /*Play Roar Sound*/
    RoarSound = 101,
    /*Play Bell Sound*/
    BellSound = 102,
    /*Play Chant1 Sound*/
    Chant1Sound = 103,
    /*Play Chant2 Sound*/
    Chant2Sound = 104,
    /*Play DarkWhispers1 Sound*/
    DarkWhispers1Sound = 105,
    /*Play DarkWhispers2 Sound*/
    DarkWhispers2Sound = 106,
    /*Play DarkLaugh Sound*/
    DarkLaughSound = 107,
    /*Play DarkWind Sound*/
    DarkWindSound = 108,
    /*Play DarkSpeech Sound*/
    DarkSpeechSound = 109,
    /*Play Drums Sound*/
    DrumsSound = 110,
    /*Play GhostSpeak Sound*/
    GhostSpeakSound = 111,
    /*Play Breathing Sound*/
    BreathingSound = 112,
    /*Play Howl Sound*/
    HowlSound = 113,
    /*Play LostSouls Sound*/
    LostSoulsSound = 114,
    /*Play Squeal Sound*/
    SquealSound = 117,
    /*Play Thunder1 Sound*/
    Thunder1Sound = 118,
    /*Play Thunder2 Sound*/
    Thunder2Sound = 119,
    /*Play Thunder3 Sound*/
    Thunder3Sound = 120,
    /*Play Thunder4 Sound*/
    Thunder4Sound = 121,
    /*Play Thunder5 Sound*/
    Thunder5Sound = 122,
    /*Play Thunder6 Sound*/
    Thunder6Sound = 123
}
/*The movement type defines the fields for the rest of the message*/
enum MovementType {
    InterpertedMotionState = 0,
    MoveToObject = 6,
    MoveToPosition = 7,
    TurnToObject = 8,
    TurnToPosition = 9
}
/*Additional movement options*/
enum MovementOption {
    None = 0,
    StickToObject = 1,
    StandingLongJump = 2
}
/*Command types*/
enum Command {
    Invalid = 0,
    HoldRun = 1,
    HoldSidestep = 2,
    Ready = 3,
    Stop = 4,
    WalkForward = 5,
    WalkBackwards = 6,
    RunForward = 7,
    Fallen = 8,
    Interpolating = 9,
    Hover = 10,
    On = 11,
    Off = 12,
    TurnRight = 13,
    TurnLeft = 14,
    SideStepRight = 15,
    SideStepLeft = 16,
    Dead = 17,
    Crouch = 18,
    Sitting = 19,
    Sleeping = 20,
    Falling = 21,
    Reload = 22,
    Unload = 23,
    Pickup = 24,
    StoreInBackpack = 25,
    Eat = 26,
    Drink = 27,
    Reading = 28,
    JumpCharging = 29,
    AimLevel = 30,
    AimHigh15 = 31,
    AimHigh30 = 32,
    AimHigh45 = 33,
    AimHigh60 = 34,
    AimHigh75 = 35,
    AimHigh90 = 36,
    AimLow15 = 37,
    AimLow30 = 38,
    AimLow45 = 39,
    AimLow60 = 40,
    AimLow75 = 41,
    AimLow90 = 42,
    MagicBlast = 43,
    MagicSelfHead = 44,
    MagicSelfHeart = 45,
    MagicBonus = 46,
    MagicClap = 47,
    MagicHarm = 48,
    MagicHeal = 49,
    MagicThrowMissile = 50,
    MagicRecoilMissile = 51,
    MagicPenalty = 52,
    MagicTransfer = 53,
    MagicVision = 54,
    MagicEnchantItem = 55,
    MagicPortal = 56,
    MagicPray = 57,
    StopTurning = 58,
    Jump = 59,
    HandCombat = 60,
    NonCombat = 61,
    SwordCombat = 62,
    BowCombat = 63,
    SwordShieldCombat = 64,
    CrossbowCombat = 65,
    UnusedCombat = 66,
    SlingCombat = 67,
    TwoHandedSwordCombat = 68,
    TwoHandedStaffCombat = 69,
    DualWieldCombat = 70,
    ThrownWeaponCombat = 71,
    Graze = 72,
    Magi = 73,
    Hop = 74,
    Jumpup = 75,
    Cheer = 76,
    ChestBeat = 77,
    TippedLeft = 78,
    TippedRight = 79,
    FallDown = 80,
    Twitch1 = 81,
    Twitch2 = 82,
    Twitch3 = 83,
    Twitch4 = 84,
    StaggerBackward = 85,
    StaggerForward = 86,
    Sanctuary = 87,
    ThrustMed = 88,
    ThrustLow = 89,
    ThrustHigh = 90,
    SlashHigh = 91,
    SlashMed = 92,
    SlashLow = 93,
    BackhandHigh = 94,
    BackhandMed = 95,
    BackhandLow = 96,
    Shoot = 97,
    AttackHigh1 = 98,
    AttackMed1 = 99,
    AttackLow1 = 100,
    AttackHigh2 = 101,
    AttackMed2 = 102,
    AttackLow2 = 103,
    AttackHigh3 = 104,
    AttackMed3 = 105,
    AttackLow3 = 106,
    HeadThrow = 107,
    FistSlam = 108,
    BreatheFlame_ = 109,
    SpinAttack = 110,
    MagicPowerUp01 = 111,
    MagicPowerUp02 = 112,
    MagicPowerUp03 = 113,
    MagicPowerUp04 = 114,
    MagicPowerUp05 = 115,
    MagicPowerUp06 = 116,
    MagicPowerUp07 = 117,
    MagicPowerUp08 = 118,
    MagicPowerUp09 = 119,
    MagicPowerUp10 = 120,
    ShakeFist = 121,
    Beckon = 122,
    BeSeeingYou = 123,
    BlowKiss = 124,
    BowDeep = 125,
    ClapHands = 126,
    Cry = 127,
    Laugh = 128,
    MimeEat = 129,
    MimeDrink = 130,
    Nod = 131,
    Point = 132,
    ShakeHead = 133,
    Shrug = 134,
    Wave = 135,
    Akimbo = 136,
    HeartyLaugh = 137,
    Salute = 138,
    ScratchHead = 139,
    SmackHead = 140,
    TapFoot = 141,
    WaveHigh = 142,
    WaveLow = 143,
    YawnStretch = 144,
    Cringe = 145,
    Kneel = 146,
    Plead = 147,
    Shiver = 148,
    Shoo = 149,
    Slouch = 150,
    Spit = 151,
    Surrender = 152,
    Woah = 153,
    Winded = 154,
    YMCA = 155,
    EnterGame = 156,
    ExitGame = 157,
    OnCreation = 158,
    OnDestruction = 159,
    EnterPortal = 160,
    ExitPortal = 161,
    Cancel = 162,
    UseSelected = 163,
    AutosortSelected = 164,
    DropSelected = 165,
    GiveSelected = 166,
    SplitSelected = 167,
    ExamineSelected = 168,
    CreateShortcutToSelected = 169,
    PreviousCompassItem = 170,
    NextCompassItem = 171,
    ClosestCompassItem = 172,
    PreviousSelection = 173,
    LastAttacker = 174,
    PreviousFellow = 175,
    NextFellow = 176,
    ToggleCombat = 177,
    HighAttack = 178,
    MediumAttack = 179,
    LowAttack = 180,
    EnterChat = 181,
    ToggleChat = 182,
    SavePosition = 183,
    OptionsPanel = 184,
    ResetView = 185,
    CameraLeftRotate = 186,
    CameraRightRotate = 187,
    CameraRaise = 188,
    CameraLower = 189,
    CameraCloser = 190,
    CameraFarther = 191,
    FloorView = 192,
    MouseLook = 193,
    PreviousItem = 194,
    NextItem = 195,
    ClosestItem = 196,
    ShiftView = 197,
    MapView = 198,
    AutoRun = 199,
    DecreasePowerSetting = 200,
    IncreasePowerSetting = 201,
    Pray = 202,
    Mock = 203,
    Teapot = 204,
    SpecialAttack1 = 205,
    SpecialAttack2 = 206,
    SpecialAttack3 = 207,
    MissileAttack1 = 208,
    MissileAttack2 = 209,
    MissileAttack3 = 210,
    CastSpell = 211,
    Flatulence = 212,
    FirstPersonView = 213,
    AllegiancePanel = 214,
    FellowshipPanel = 215,
    SpellbookPanel = 216,
    SpellComponentsPanel = 217,
    HousePanel = 218,
    AttributesPanel = 219,
    SkillsPanel = 220,
    MapPanel = 221,
    InventoryPanel = 222,
    Demonet = 223,
    UseMagicStaff = 224,
    UseMagicWand = 225,
    Blink = 226,
    Bite = 227,
    TwitchSubstate1 = 228,
    TwitchSubstate2 = 229,
    TwitchSubstate3 = 230,
    CaptureScreenshotToFile = 231,
    BowNoAmmo = 232,
    CrossBowNoAmmo = 233,
    ShakeFistState = 234,
    PrayState = 235,
    BowDeepState = 236,
    ClapHandsState = 237,
    CrossArmsState = 238,
    ShiverState = 239,
    PointState = 240,
    WaveState = 241,
    AkimboState = 242,
    SaluteState = 243,
    ScratchHeadState = 244,
    TapFootState = 245,
    LeanState = 246,
    KneelState = 247,
    PleadState = 248,
    ATOYOT = 249,
    SlouchState = 250,
    SurrenderState = 251,
    WoahState = 252,
    WindedState = 253,
    AutoCreateShortcuts = 254,
    AutoRepeatAttacks = 255,
    AutoTarget = 256,
    AdvancedCombatInterface = 257,
    IgnoreAllegianceRequests = 258,
    IgnoreFellowshipRequests = 259,
    InvertMouseLook = 260,
    LetPlayersGiveYouItems = 261,
    AutoTrackCombatTargets = 262,
    DisplayTooltips = 263,
    AttemptToDeceivePlayers = 264,
    RunAsDefaultMovement = 265,
    StayInChatModeAfterSend = 266,
    RightClickToMouseLook = 267,
    VividTargetIndicator = 268,
    SelectSelf = 269,
    SkillHealSelf = 270,
    NextMonster = 271,
    PreviousMonster = 272,
    ClosestMonster = 273,
    NextPlayer = 274,
    PreviousPlayer = 275,
    ClosestPlayer = 276,
    SnowAngelState = 277,
    WarmHands = 278,
    CurtseyState = 279,
    AFKState = 280,
    MeditateState = 281,
    TradePanel = 282,
    LogOut = 283,
    DoubleSlashLow = 284,
    DoubleSlashMed = 285,
    DoubleSlashHigh = 286,
    TripleSlashLow = 287,
    TripleSlashMed = 288,
    TripleSlashHigh = 289,
    DoubleThrustLow = 290,
    DoubleThrustMed = 291,
    DoubleThrustHigh = 292,
    TripleThrustLow = 293,
    TripleThrustMed = 294,
    TripleThrustHigh = 295,
    MagicPowerUp01Purple = 296,
    MagicPowerUp02Purple = 297,
    MagicPowerUp03Purple = 298,
    MagicPowerUp04Purple = 299,
    MagicPowerUp05Purple = 300,
    MagicPowerUp06Purple = 301,
    MagicPowerUp07Purple = 302,
    MagicPowerUp08Purple = 303,
    MagicPowerUp09Purple = 304,
    MagicPowerUp10Purple = 305,
    Helper = 306,
    Pickup5 = 307,
    Pickup10 = 308,
    Pickup15 = 309,
    Pickup20 = 310,
    HouseRecall = 311,
    AtlatlCombat = 312,
    ThrownShieldCombat = 313,
    SitState = 314,
    SitCrossleggedState = 315,
    SitBackState = 316,
    PointLeftState = 317,
    PointRightState = 318,
    TalktotheHandState = 319,
    PointDownState = 320,
    DrudgeDanceState = 321,
    PossumState = 322,
    ReadState = 323,
    ThinkerState = 324,
    HaveASeatState = 325,
    AtEaseState = 326,
    NudgeLeft = 327,
    NudgeRight = 328,
    PointLeft = 329,
    PointRight = 330,
    PointDown = 331,
    Knock = 332,
    ScanHorizon = 333,
    DrudgeDance = 334,
    HaveASeat = 335,
    LifestoneRecall = 336,
    CharacterOptionsPanel = 337,
    SoundAndGraphicsPanel = 338,
    HelpfulSpellsPanel = 339,
    HarmfulSpellsPanel = 340,
    CharacterInformationPanel = 341,
    LinkStatusPanel = 342,
    VitaePanel = 343,
    ShareFellowshipXP = 344,
    ShareFellowshipLoot = 345,
    AcceptCorpseLooting = 346,
    IgnoreTradeRequests = 347,
    DisableWeather = 348,
    DisableHouseEffect = 349,
    SideBySideVitals = 350,
    ShowRadarCoordinates = 351,
    ShowSpellDurations = 352,
    MuteOnLosingFocus = 353,
    Fishing = 354,
    MarketplaceRecall = 355,
    EnterPKLite = 356,
    AllegianceChat = 357,
    AutomaticallyAcceptFellowshipRequests = 358,
    Reply = 359,
    MonarchReply = 360,
    PatronReply = 361,
    ToggleCraftingChanceOfSuccessDialog = 362,
    UseClosestUnopenedCorpse = 363,
    UseNextUnopenedCorpse = 364,
    IssueSlashCommand = 365,
    AllegianceHometownRecall = 366,
    PKArenaRecall = 367,
    OffhandSlashHigh = 368,
    OffhandSlashMed = 369,
    OffhandSlashLow = 370,
    OffhandThrustHigh = 371,
    OffhandThrustMed = 372,
    OffhandThrustLow = 373,
    OffhandDoubleSlashLow = 374,
    OffhandDoubleSlashMed = 375,
    OffhandDoubleSlashHigh = 376,
    OffhandTripleSlashLow = 377,
    OffhandTripleSlashMed = 378,
    OffhandTripleSlashHigh = 379,
    OffhandDoubleThrustLow = 380,
    OffhandDoubleThrustMed = 381,
    OffhandDoubleThrustHigh = 382,
    OffhandTripleThrustLow = 383,
    OffhandTripleThrustMed = 384,
    OffhandTripleThrustHigh = 385,
    OffhandKick = 386,
    AttackHigh4 = 387,
    AttackMed4 = 388,
    AttackLow4 = 389,
    AttackHigh5 = 390,
    AttackMed5 = 391,
    AttackLow5 = 392,
    AttackHigh6 = 393,
    AttackMed6 = 394,
    AttackLow6 = 395,
    PunchFastHigh = 396,
    PunchFastMed = 397,
    PunchFastLow = 398,
    PunchSlowHigh = 399,
    PunchSlowMed = 400,
    PunchSlowLow = 401,
    OffhandPunchFastHigh = 402,
    OffhandPunchFastMed = 403,
    OffhandPunchFastLow = 404,
    OffhandPunchSlowHigh = 405,
    OffhandPunchSlowMed = 406,
    OffhandPunchSlowLow = 407
}
/*The stance for a character or monster.*/
enum StanceMode {
    HandCombat = 60,
    NonCombat = 61,
    SwordCombat = 62,
    BowCombat = 63,
    SwordShieldCombat = 64,
    CrossbowCombat = 65,
    UnusedCombat = 66,
    SlingCombat = 67,
    TwoHandedSwordCombat = 68,
    TwoHandedStaffCombat = 69,
    DualWieldCombat = 70,
    ThrownWeaponCombat = 71,
    BowNoAmmo = 232,
    CrossBowNoAmmo = 233,
    AtlatlCombat = 312,
    ThrownShieldCombat = 313
}
/*The movement (forward, side, turn) for a character or monster.*/
enum MovementCommand {
    HoldRun = 1,
    HoldSidestep = 2,
    WalkForward = 5,
    WalkBackwards = 6,
    RunForward = 7,
    TurnRight = 13,
    TurnLeft = 14,
    SideStepRight = 15,
    SideStepLeft = 16
}
/*House flags*/
enum HouseBitfield {
    Undef = 0,
    Active = 1,
    RequiresMonarch = 2
}
/*The type response to a chargen request*/
enum CharGenResponseType {
    OK = 1,
    NameInUse = 3,
    NameBanned = 4,
    Corrupt = 5,
    Corrupt_0x0006 = 6,
    AdminPrivilegeDenied = 7
}
/*The CharacterErrorType identifies the type of character error that has occured.*/
enum CharacterErrorType {
    /*Id_CHAR_ERROR_LOGON*/
    Logon = 1,
    /*Id_CHAR_ERROR_ACCOUNT_LOGON*/
    AccountLogin = 3,
    /*Id_CHAR_ERROR_SERVER_CRASH*/
    ServerCrash = 4,
    /*Id_CHAR_ERROR_LOGOFF*/
    Logoff = 5,
    /*Id_CHAR_ERROR_DELETE*/
    Delete = 6,
    /*Id_CHAR_ERROR_SERVER_CRASH*/
    ServerCrash2 = 8,
    /*Id_CHAR_ERROR_ACCOUNT_INVALId*/
    AccountInvalid = 9,
    /*Id_CHAR_ERROR_ACCOUNT_DOESNT_EXIST*/
    AccountDoesntExist = 10,
    /*Id_CHAR_ERROR_ENTER_GAME_GENERIC*/
    EnterGameGeneric = 11,
    /*Id_CHAR_ERROR_ENTER_GAME_STRESS_ACCOUNT*/
    EnterGameStressAccount = 12,
    /*Id_CHAR_ERROR_ENTER_GAME_CHARACTER_IN_WORLD*/
    EnterGameCharacterInWorld = 13,
    /*Id_CHAR_ERROR_ENTER_GAME_PLAYER_ACCOUNT_MISSING*/
    EnterGamePlayerAccountMissing = 14,
    /*Id_CHAR_ERROR_ENTER_GAME_CHARACTER_NOT_OWNED*/
    EnterGameCharacterNotOwned = 15,
    /*Id_CHAR_ERROR_ENTER_GAME_CHARACTER_IN_WORLD_SERVER*/
    EnterGameCharacterInWorldServer = 16,
    /*Id_CHAR_ERROR_ENTER_GAME_OLD_CHARACTER*/
    EnterGameOldCharacter = 17,
    /*Id_CHAR_ERROR_ENTER_GAME_CORRUPT_CHARACTER*/
    EnterGameCorruptCharacter = 18,
    /*Id_CHAR_ERROR_ENTER_GAME_START_SERVER_DOWN*/
    EnterGameStartServerDown = 19,
    /*Id_CHAR_ERROR_ENTER_GAME_COULDNT_PLACE_CHARACTER*/
    EnterGameCouldntPlaceCharacter = 20,
    /*Id_CHAR_ERROR_LOGON_SERVER_FULL*/
    LogonServerFull = 21,
    /*Id_CHAR_ERROR_ENTER_GAME_CHARACTER_LOCKED*/
    EnterGameCharacterLocked = 23,
    /*Id_CHAR_ERROR_SUBSCRIPTION_EXPIRED*/
    SubscriptionExpired = 24
}
/*The state flags for an object*/
enum PhysicsState {
    None = 0,
    Static = 1,
    Ethereal = 4,
    ReportCollision = 8,
    IgnoreCollision = 16,
    NoDraw = 32,
    Missle = 64,
    Pushable = 128,
    AlignPath = 256,
    PathClipped = 512,
    Gravity = 1024,
    LightingOn = 2048,
    ParticleEmitter = 4096,
    Hidden = 16384,
    ScriptedCollision = 32768,
    HasPhysicsBsp = 65536,
    Inelastic = 131072,
    HasDefaultAnim = 262144,
    HasDefaultScript = 524288,
    Cloaked = 1048576,
    ReportCollisionAsEnvironment = 2097152,
    EdgeSlide = 4194304,
    Sledding = 8388608,
    Frozen = 16777216
}
/*The TurbineChatType identifies the type of Turbine Chat message.*/
enum TurbineChatType {
    ServerToClientMessage = 1,
    ClientToServerMessage = 3,
    AckClientToServerMessage = 5
}
/*The DatFileType identifies the dat file to be used.*/
enum DatFileType {
    client_portal = 1,
    client_cell_1 = 2,
    client_local_English = 3
}
/*The CompressionType identifies the type of data compression used.*/
enum CompressionType {
    None = 0,
    ZLib = 1
}
/*The AttributeMask selects which creature attributes highlighting is applied to.*/
enum AttributeMask {
    Strength = 1,
    Endurance = 2,
    Quickness = 4,
    Coordination = 8,
    Focus = 16,
    Self = 32,
    Health = 64,
    Stamina = 128,
    Mana = 256
}
/*The DamageType identifies the type of damage.*/
enum DamageType {
    Slashing = 1,
    Piercing = 2,
    Bludgeoning = 4,
    Cold = 8,
    Fire = 16,
    Acid = 32,
    Electric = 64
}
/*The HookAppraisalFlags identifies various properties for an item hooked.*/
enum HookAppraisalFlags {
    Inscribable = 1,
    IsHealer = 2,
    IsLockpick = 8
}
/*The ArmorHighlightMask selects which armor attributes highlighting is applied to.*/
enum ArmorHighlightMask {
    ArmorLevel = 1,
    SlashingProtection = 2,
    PiercingProtection = 4,
    BludgeoningProtection = 8,
    ColdProtection = 16,
    FireProtection = 32,
    AcidProtection = 64,
    ElectricalProtection = 128
}
/*The ResistHighlightMask selects which wand attributes highlighting is applied to.*/
enum ResistHighlightMask {
    ResistSlash = 1,
    ResistPierce = 2,
    ResistBludgeon = 4,
    ResistFire = 8,
    ResistCold = 16,
    ResistAcid = 32,
    ResistElectric = 64,
    ResistHealthBoost = 128,
    ResistStaminaDrain = 256,
    ResistStaminaBoost = 512,
    ResistManaDrain = 1024,
    ResistManaBoost = 2048,
    ManaConversionMod = 4096,
    ElementalDamageMod = 8192,
    ResistNether = 16384
}
/*The WeaponHighlightMask selects which weapon attributes highlighting is applied to.*/
enum WeaponHighlightMask {
    AttackSkill = 1,
    MeleeDefense = 2,
    Speed = 4,
    Damage = 8,
    DamageVariance = 16,
    DamageMod = 32
}
/*Additional attack information*/
enum AttackConditionsMask {
    CriticalProtectionAugmentation = 1,
    Recklessness = 2,
    SneakAttack = 4
}
/*The DamageLocation indicates where damage was done.*/
enum DamageLocation {
    Head = 0,
    Chest = 1,
    Abdomen = 2,
    UpperArm = 3,
    LowerArm = 4,
    Hand = 5,
    UpperLeg = 6,
    LowerLeg = 7,
    Foot = 8
}
/*The LogTextType indicates the kind of text going to the chat area.*/
enum LogTextType {
    Default = 0,
    Speech = 2,
    Tell = 3,
    SpeechDirectSend = 4,
    System = 5,
    Combat = 6,
    Magic = 7,
    Channel = 8,
    ChannelSend = 9,
    Social = 10,
    SocialSend = 11,
    Emote = 12,
    Advancement = 13,
    Abuse = 14,
    Help = 15,
    Appraisal = 16,
    Spellcasting = 17,
    Allegiance = 18,
    Fellowship = 19,
    WorldBroadcast = 20,
    CombatEnemy = 21,
    CombatSelf = 22,
    Recall = 23,
    Craft = 24,
    Salvaging = 25,
    AdminTell = 31
}
/*The EndTradeReason identifies the reason trading was ended.*/
enum EndTradeReason {
    Normal = 0,
    EnteredCombat = 2,
    Cancelled = 81
}
/*The TradeSide identifies the side of the trade window.*/
enum TradeSide {
    Self = 1,
    Partner = 2
}
/*The HouseType identifies the type of house.*/
enum HouseType {
    Cottage = 1,
    Villa = 2,
    Mansion = 3,
    Apartment = 4
}
/*Identifies the chess move attempt result.  Negative/0 values are failures.*/
enum ChessMoveResult {
    /*Its not your turn, please wait for your opponents move.*/
    FailureNotYourTurn = -3,
    /*The selected piece cannot move that direction*/
    FailureInvalidDirection = -100,
    /*The selected piece cannot move that far*/
    FailureInvalidDistance = -101,
    /*You tried to move an empty square*/
    FailureMovingEmptySquare = -102,
    /*The selected piece is not yours*/
    FailureMovingOpponentPiece = -103,
    /*You cannot move off the board*/
    FailureMovedPieceOffBoard = -104,
    /*You cannot attack your own pieces*/
    FailureAttackingOwnPiece = -105,
    /*That move would put you in check*/
    FailureCannotMoveIntoCheck = -106,
    /*You can only move through empty squares*/
    FailurePathBlocked = -107,
    /*You cannot castle out of check*/
    FailureCastleOutOfCheck = -108,
    /*You cannot castle through check*/
    FailureCastleThroughCheck = -109,
    /*You cannot castle after moving the King or Rook*/
    FailureCastlePieceMoved = -110,
    /*That move is invalid*/
    FailureInvalidMove = 0,
    /*Successful move.*/
    Success = 1,
    /*Your opponent is in Check.*/
    OpponentInCheck = 1024,
    /*You have checkmated your opponent!*/
    CheckMatedOpponent = 2048
}
/*Type of fellow update*/
enum FellowUpdateType {
    FullUpdate = 1,
    UpdateStats = 2,
    UpdateVitals = 3
}
/*Stage a contract is in.  Values 4+ appear to provide contract specific update messages*/
enum ContractStage {
    New = 1,
    InProgress = 2,
    /*If this is set, it looks at the time when repeats to show either Done, Available, or # to Repeat*/
    DoneOrPendingRepeat = 3
}
/*Movement hold key*/
enum HoldKey {
    Invalid = 0,
    None = 1,
    Run = 2
}
/*Radar behavior*/
enum RadarBehavior {
    Undefined = 0,
    ShowNever = 1,
    ShowMovement = 2,
    ShowAttacking = 3,
    ShowAlways = 4
}
/*Gender of a player*/
enum Gender {
    Invalid = 0,
    Male = 1,
    Female = 2
}
enum FactionBits {
    None = 0,
    CelestialHand = 1,
    EldrytchWeb = 2,
    RadiantBlood = 4
}
/*Creature type*/
enum CreatureType {
    Olthoi = 1,
    Banderling = 2,
    Drudge = 3,
    Mosswart = 4,
    Lugian = 5,
    Tumerok = 6,
    Mite = 7,
    Tusker = 8,
    PhyntosWasp = 9,
    Rat = 10,
    Auroch = 11,
    Cow = 12,
    Golem = 13,
    Undead = 14,
    Gromnie = 15,
    Reedshark = 16,
    Armoredillo = 17,
    Fae = 18,
    Virindi = 19,
    Wisp = 20,
    Knathtead = 21,
    Shadow = 22,
    Mattekar = 23,
    Mumiyah = 24,
    Rabbit = 25,
    Sclavus = 26,
    ShallowsShark = 27,
    Monouga = 28,
    Zefir = 29,
    Skeleton = 30,
    Human = 31,
    Shreth = 32,
    Chittick = 33,
    Moarsman = 34,
    OlthoiLarvae = 35,
    Slithis = 36,
    Deru = 37,
    FireElemental = 38,
    Snowman = 39,
    Unknown = 40,
    Bunny = 41,
    LightningElemental = 42,
    Rockslide = 43,
    Grievver = 44,
    Niffis = 45,
    Ursuin = 46,
    Crystal = 47,
    HollowMinion = 48,
    Scarecrow = 49,
    Idol = 50,
    Empyrean = 51,
    Hopeslayer = 52,
    Doll = 53,
    Marionette = 54,
    Carenzi = 55,
    Siraluun = 56,
    AunTumerok = 57,
    HeaTumerok = 58,
    Simulacrum = 59,
    AcidElemental = 60,
    FrostElemental = 61,
    Elemental = 62,
    Statue = 63,
    Wall = 64,
    AlteredHuman = 65,
    Device = 66,
    Harbinger = 67,
    DarkSarcophagus = 68,
    Chicken = 69,
    GotrokLugian = 70,
    Margul = 71,
    BleachedRabbit = 72,
    NastyRabbit = 73,
    GrimacingRabbit = 74,
    Burun = 75,
    Target = 76,
    Ghost = 77,
    Fiun = 78,
    Eater = 79,
    Penguin = 80,
    Ruschk = 81,
    Thrungus = 82,
    ViamontianKnight = 83,
    Remoran = 84,
    Swarm = 85,
    Moar = 86,
    EnchantedArms = 87,
    Sleech = 88,
    Mukkir = 89,
    Merwart = 90,
    Food = 91,
    ParadoxOlthoi = 92,
    Harvest = 93,
    Energy = 94,
    Apparition = 95,
    Aerbax = 96,
    Touched = 97,
    BlightedMoarsman = 98,
    GearKnight = 99,
    Gurog = 100,
    Anekshay = 101
}
enum CombatStyle {
    Undef = 0,
    Unarmed = 1,
    OneHanded = 2,
    OneHandedAndShield = 4,
    TwoHanded = 8,
    Bow = 16,
    Crossbow = 32,
    Sling = 64,
    ThrownWeapon = 128,
    DualWield = 256,
    Magic = 512,
    Atlatl = 1024,
    ThrownShield = 2048,
    Reserved1 = 4096,
    Reserved2 = 8192,
    Reserved3 = 16384,
    Reserved4 = 32768,
    StubbornMagic = 65536,
    StubbornProjectile = 131072,
    StubbornMelee = 262144,
    StubbornMissile = 524288,
    All = 65535
}
/*Indicates what data is present in the ACQualities data*/
enum ACQualitiesFlags {
    Attributes = 1,
    Skills = 2,
    Body = 4,
    SpellBook = 256,
    Enchantments = 512,
    EventFilter = 8,
    Emotes = 16,
    CreationProfile = 32,
    PageData = 64,
    Generators = 128,
    GeneratorRegistry = 1024,
    GeneratorQueue = 2048
}
enum GeneratorDestruct {
    Undef = 0,
    Nothing = 1,
    Destroy = 2,
    Kill = 3
}
enum GeneratorTimeType {
    Undef = 0,
    RealTime = 1,
    Defined = 2,
    Event = 3,
    Night = 4,
    Day = 5
}
enum GeneratorType {
    Undef = 0,
    Relative = 1,
    Absolute = 2
}
enum ImbuedEffectType {
    Undef = 0,
    CriticalStrike = 1,
    CripplingBlow = 2,
    ArmorRending = 4,
    SlashRending = 8,
    PierceRending = 16,
    BludgeonRending = 32,
    AcidRending = 64,
    ColdRending = 128,
    ElectricRending = 256,
    FireRending = 512,
    MeleeDefense = 1024,
    MissileDefense = 2048,
    MagicDefense = 4096,
    Spellbook = 8192,
    NetherRending = 16384,
    IgnoreSomeMagicProjectileDamage = 536870912,
    AlwaysCritical = 1073741824,
    IgnoreAllArmor = 2147483648
}
enum ItemXpStyle {
    Undef = 0,
    Fixed = 1,
    ScalesWithLevel = 2,
    FixedPlusBase = 3
}
enum SubscriptionStatus {
    No_Subscription = 0,
    AsheronsCall_Subscription = 1,
    DarkMajesty_Subscription = 2,
    ThroneOfDestiny_Subscription = 3,
    ThroneOfDestiny_Preordered = 4
}
enum WeaponType {
    Undef = 0,
    Unarmed = 1,
    Sword = 2,
    Axe = 3,
    Mace = 4,
    Spear = 5,
    Dagger = 6,
    Staff = 7,
    Bow = 8,
    Crossbow = 9,
    Thrown = 10,
    TwoHanded = 11,
    Magic = 12
}
enum ActivationResponse {
    Undef = 0,
    Use = 2,
    Animate = 4,
    Talk = 16,
    Emote = 2048,
    CastSpell = 4096,
    Generate = 65536
}
enum AetheriaBitfield {
    None = 0,
    Blue = 1,
    Yellow = 2,
    Red = 4
}
enum HookGroupType {
    Undef = 0,
    NoisemakingItems = 1,
    TestItems = 2,
    PortalItems = 4,
    WritableItems = 8,
    SpellCastingItems = 16,
    SpellTeachingItems = 32
}
enum ArmorType {
    None = 0,
    Cloth = 1,
    Leather = 2,
    StuddedLeather = 4,
    Scalemail = 8,
    Chainmail = 16,
    Metal = 32
}
enum AttunedStatus {
    Normal = 0,
    Attuned = 1,
    Sticky = 2
}
enum BondedStatus {
    Destroy = -2,
    Slippery = -1,
    Normal = 0,
    Bonded = 1,
    Sticky = 2
}
enum HouseStatus {
    Disabled = -1,
    InActive = 0,
    Active = 1
}
enum UiEffects {
    Undef = 0,
    Magical = 1,
    Poisoned = 2,
    BoostHealth = 4,
    BoostMana = 8,
    BoostStamina = 16,
    Fire = 32,
    Lightning = 64,
    Frost = 128,
    Acid = 256,
    Bludgeoning = 512,
    Slashing = 1024,
    Piercing = 2048,
    Nether = 4096
}
enum PlayerKillerStatus {
    Undef = 0,
    Protected = 1,
    NPK = 2,
    PK = 4,
    Unprotected = 8,
    RubberGlue = 16,
    Free = 32,
    PKLite = 64
}
enum PortalBitmask {
    Undef = 0,
    NotPassable = 0,
    Unrestricted = 1,
    NoPk = 2,
    NoPKLite = 4,
    NoNPK = 8,
    NoSummon = 16,
    NoRecall = 32,
    OnlyOlthoiPCs = 64,
    NoOlthoiPCs = 128,
    NoVitae = 256,
    NoNewAccounts = 512
}
enum WieldRequirement {
    Undef = 0,
    Skill = 1,
    RawSkill = 2,
    Attrib = 3,
    RawAttrib = 4,
    SecondaryAttrib = 5,
    RawSecondaryAttrib = 6,
    Level = 7,
    Training = 8,
    IntStat = 9,
    BoolStat = 10,
    CreatureType = 11,
    HeritageType = 12
}
enum PaletteTemplate {
    Undef = 0,
    AquaBlue = 1,
    Blue = 2,
    BluePurple = 3,
    Brown = 4,
    DarkBlue = 5,
    DeepBrown = 6,
    DeepGreen = 7,
    Green = 8,
    Grey = 9,
    LightBlue = 10,
    Maroon = 11,
    Navy = 12,
    Purple = 13,
    Red = 14,
    RedPurple = 15,
    Rose = 16,
    Yellow = 17,
    YellowBrown = 18,
    Copper = 19,
    Silver = 20,
    Gold = 21,
    Aqua = 22,
    DarkAquaMetal = 23,
    DarkBlueMetal = 24,
    DarkCopperMetal = 25,
    DarkGoldMetal = 26,
    DarkGreenMetal = 27,
    DarkPurpleMetal = 28,
    DarkRedMetal = 29,
    DarkSilverMetal = 30,
    LightAquaMetal = 31,
    LightBlueMetal = 32,
    LightCopperMetal = 33,
    LightGoldMetal = 34,
    LightGreenMetal = 35,
    LightPurpleMetal = 36,
    LightRedMetal = 37,
    LightSilverMetal = 38,
    Black = 39,
    Bronze = 40,
    SandyYellow = 41,
    DarkBrown = 42,
    LightBrown = 43,
    TanRed = 44,
    PaleGreen = 45,
    Tan = 46,
    PastyYellow = 47,
    SnowyWhite = 48,
    RuddyYellow = 49,
    RuddierYellow = 50,
    MidGrey = 51,
    DarkGrey = 52,
    BlueDullSilver = 53,
    YellowPaleSilver = 54,
    BrownBlueDark = 55,
    BrownBlueMed = 56,
    GreenSilver = 57,
    BrownGreen = 58,
    YellowGreen = 59,
    PalePurple = 60,
    White = 61,
    RedBrown = 62,
    GreenBrown = 63,
    OrangeBrown = 64,
    PaleGreenBrown = 65,
    PaleOrange = 66,
    GreenSlime = 67,
    BlueSlime = 68,
    YellowSlime = 69,
    PurpleSlime = 70,
    DullRed = 71,
    GreyWhite = 72,
    MediumGrey = 73,
    DullGreen = 74,
    OliveGreen = 75,
    Orange = 76,
    BlueGreen = 77,
    Olive = 78,
    Lead = 79,
    Iron = 80,
    LiteGreen = 81,
    PinkPurple = 82,
    Amber = 83,
    DyeDarkGreen = 84,
    DyeDarkRed = 85,
    DyeDarkYellow = 86,
    DyeBotched = 87,
    DyeWinterBlue = 88,
    DyeWinterGreen = 89,
    DyeWinterSilver = 90,
    DyeSpringBlue = 91,
    DyeSpringPurple = 92,
    DyeSpringBlack = 93
}
enum SummoningMastery {
    Undef = 0,
    Primalist = 1,
    Necromancer = 2,
    Naturalist = 3
}
enum ContractId {
    Undef = 0,
    Contract_1_The_Shadows_of_Bitter_Winter = 1,
    Contract_2_Test_Quest_Stamping = 2,
    Contract_3_Test_Contract_3 = 3,
    Contract_4_Test_Contract_4 = 4,
    Contract_5_Reign_of_Terror = 5,
    Contract_6_Glenden_Wood_Invasion_Low = 6,
    Contract_7_Glenden_Wood_Invasion_Mid = 7,
    Contract_8_Glenden_Wood_Invasion_High = 8,
    Contract_9_Frozen_Fury = 9,
    Contract_10_Defense_of_Zaikhal_Copper = 10,
    Contract_11_Defense_of_Zaikhal_Silver = 11,
    Contract_12_Defense_of_Zaikhal_Gold = 12,
    Contract_13_Defense_of_Zaikhal_Platinum = 13,
    Contract_14_The_Caliginous_Bethel = 14,
    Contract_15_The_Legend_of_the_Tusker_Paw = 15,
    Contract_16_Oswalds_Lair = 16,
    Contract_17_The_Decrepit_Tower = 17,
    Contract_18_Banderling_Haunt = 18,
    Contract_19_Reconnaissance = 19,
    Contract_20_Assault_Low = 20,
    Contract_21_Assault_Mid = 21,
    Contract_22_Assault_High = 22,
    Contract_23_Assault_Expert = 23,
    Contract_24_Infiltration = 24,
    Contract_25_Of_Trust_and_Betrayal = 25,
    Contract_26_Ishaqs_Lost_Key = 26,
    Contract_27_The_Shadows_of_Bitter_Winter = 27,
    Contract_28_Suzuhara_Baijins_Delivery = 28,
    Contract_29_Haleatan_Beach_Camps = 29,
    Contract_30_Ricardos_Blood_Gem = 30,
    Contract_31_Sawato_Extortion = 31,
    Contract_32_First_Contact = 32,
    Contract_33_Crafting_Forges_Low = 33,
    Contract_34_Crafting_Forges_Mid = 34,
    Contract_35_Crafting_Forges_High = 35,
    Contract_36_Northern_Shroud_Cabal = 36,
    Contract_37_Southern_Shroud_Cabal = 37,
    Contract_38_Faces_of_the_Mukkir_Low = 38,
    Contract_39_Faces_of_the_Mukkir_Mid = 39,
    Contract_40_Faces_of_the_Mukkir_High = 40,
    Contract_41_Faces_of_the_Mukkir_Expert = 41,
    Contract_42_Fiun_Healing_Machine = 42,
    Contract_43_Hamuds_Demise = 43,
    Contract_44_Raising_Graels_Island = 44,
    Contract_45_Enricos_Betrayal = 45,
    Contract_46_Lost_Pet = 46,
    Contract_47_His_Masters_Voice = 47,
    Contract_48_Tentacles_of_Tthuun = 48,
    Contract_49_Reign_of_Terror = 49,
    Contract_50_The_Crystal_Staff_of_the_Anekshay = 50,
    Contract_51_The_Crystal_Sword_of_the_Anekshay = 51,
    Contract_52_The_Crystal_Amulet_of_the_Anekshay = 52,
    Contract_53_The_Crystal_Idol_of_the_Anekshay = 53,
    Contract_54_Armoredillo_Hunting__Lost_City_of_Neftet = 54,
    Contract_55_Golem_Hunting__Lost_City_of_Neftet = 55,
    Contract_56_Mu_miyah_Hunting__Lost_City_of_Neftet = 56,
    Contract_57_Reedshark_Hunting__Lost_City_of_Neftet = 57,
    Contract_58_Anekshay_Bracer_Collecting__Lost_City_of_Neftet = 58,
    Contract_59_Stone_Tablet_Collecting__Lost_City_of_Neftet = 59,
    Contract_60_Prickly_Pear_Collecting__Lost_City_of_Neftet = 60,
    Contract_61_Contracts__Brokers = 61,
    Contract_62_Aug__Sir_Bellas = 62,
    Contract_63_Aug__Society = 63,
    Contract_64_Aug__Diemos = 64,
    Contract_65_Aug__Luminance = 65,
    Contract_66_Colosseum = 66,
    Contract_67_Aerbaxs_Defeat = 67,
    Contract_68_Summoning_Tthuun = 68,
    Contract_69_Empyrean_Rescue = 69,
    Contract_70_Uncovering_the_Renegades = 70,
    Contract_71_Tumerok_Salted_Meat = 71,
    Contract_72_Deewains_Dark_Cavern = 72,
    Contract_73_Sealing_Away_the_Book_of_Eibhil = 73,
    Contract_74_Soc__Dark_Isle_Delivery = 74,
    Contract_75_Soc__Vaeshok = 75,
    Contract_76_Soc__Shambling_Archivist = 76,
    Contract_77_Soc__Undead_Jaw_Collection = 77,
    Contract_78_Soc__Wight_Blade_Sorcerers = 78,
    Contract_79_Soc__Black_Coral_Collection = 79,
    Contract_80_Soc__Dark_Isle_Scouting = 80,
    Contract_81_Soc__Bandit_Mana_Hunter_Boss = 81,
    Contract_82_Soc__Mana_Infused_Jungle_Flowers = 82,
    Contract_83_Soc__Jungle_Lilies = 83,
    Contract_84_Soc__Moar_Glands = 84,
    Contract_85_Soc__Blessed_Moarsmen = 85,
    Contract_86_Soc__Phyntos_Hive_Splinters = 86,
    Contract_87_Soc__Phyntos_Honey = 87,
    Contract_88_Soc__Phyntos_Queen = 88,
    Contract_89_Soc__Phyntos_Larvae = 89,
    Contract_90_Soc__Killer_Phyntos_Wasps = 90,
    Contract_91_Soc__Coral_Towers = 91,
    Contract_92_Soc__Magshuth_Moarsmen = 92,
    Contract_93_Soc__Moarsman_High_Priest = 93,
    Contract_94_Soc__Artifact_Collection = 94,
    Contract_95_Soc__Moguth_Moarsmen = 95,
    Contract_96_Soc__Shoguth_Moarsmen = 96,
    Contract_97_Soc__Spawning_Pools = 97,
    Contract_98_Soc__Graveyard_Delivery = 98,
    Contract_99_Soc__Stone_Tracings = 99,
    Contract_100_Soc__Falatacot_Reports = 100,
    Contract_101_Soc__Dark_Isle_Delivery = 101,
    Contract_102_Soc__Vaeshok = 102,
    Contract_103_Soc__Shambling_Archivist = 103,
    Contract_104_Soc__Undead_Jaw_Collection = 104,
    Contract_105_Soc__Wight_Blade_Sorcerers = 105,
    Contract_106_Soc__Black_Coral_Collection = 106,
    Contract_107_Soc__Dark_Isle_Scouting = 107,
    Contract_108_Soc__Bandit_Mana_Hunter_Boss = 108,
    Contract_109_Soc__Mana_Infused_Jungle_Flowers = 109,
    Contract_110_Soc__Jungle_Lilies = 110,
    Contract_111_Soc__Moar_Glands = 111,
    Contract_112_Soc__Blessed_Moarsmen = 112,
    Contract_113_Soc__Phyntos_Hive_Splinters = 113,
    Contract_114_Soc__Phyntos_Honey = 114,
    Contract_115_Soc__Phyntos_Queen = 115,
    Contract_116_Soc__Phyntos_Larvae = 116,
    Contract_117_Soc__Killer_Phyntos_Wasps = 117,
    Contract_118_Soc__Coral_Towers = 118,
    Contract_119_Soc__Magshuth_Moarsmen = 119,
    Contract_120_Soc__Moarsman_High_Priest = 120,
    Contract_121_Soc__Artifact_Collection = 121,
    Contract_122_Soc__Moguth_Moarsmen = 122,
    Contract_123_Soc__Shoguth_Moarsmen = 123,
    Contract_124_Soc__Spawning_Pools = 124,
    Contract_125_Soc__Graveyard_Delivery = 125,
    Contract_126_Soc__Stone_Tracings = 126,
    Contract_127_Soc__Falatacot_Reports = 127,
    Contract_128_Soc__Dark_Isle_Delivery = 128,
    Contract_129_Soc__Vaeshok = 129,
    Contract_130_Soc__Shambling_Archivist = 130,
    Contract_131_Soc__Undead_Jaw_Collection = 131,
    Contract_132_Soc__Wight_Blade_Sorcerers = 132,
    Contract_133_Soc__Black_Coral_Collection = 133,
    Contract_134_Soc__Dark_Isle_Scouting = 134,
    Contract_135_Soc__Bandit_Mana_Hunter_Boss = 135,
    Contract_136_Soc__Mana_Infused_Jungle_Flowers = 136,
    Contract_137_Soc__Jungle_Lilies = 137,
    Contract_138_Soc__Moar_Glands = 138,
    Contract_139_Soc__Blessed_Moarsmen = 139,
    Contract_140_Soc__Phyntos_Hive_Splinters = 140,
    Contract_141_Soc__Phyntos_Honey = 141,
    Contract_142_Soc__Phyntos_Queen = 142,
    Contract_143_Soc__Phyntos_Larvae = 143,
    Contract_144_Soc__Killer_Phyntos_Wasps = 144,
    Contract_145_Soc__Coral_Towers = 145,
    Contract_146_Soc__Magshuth_Moarsmen = 146,
    Contract_147_Soc__Moarsman_High_Priest = 147,
    Contract_148_Soc__Artifact_Collection = 148,
    Contract_149_Soc__Moguth_Moarsmen = 149,
    Contract_150_Soc__Shoguth_Moarsmen = 150,
    Contract_151_Soc__Spawning_Pools = 151,
    Contract_152_Soc__Graveyard_Delivery = 152,
    Contract_153_Soc__Stone_Tracings = 153,
    Contract_154_Soc__Falatacot_Reports = 154,
    Contract_155_Soc__Palm_Fort = 155,
    Contract_156_Soc__Supply_Saboteur = 156,
    Contract_157_Soc__Forgotten_Tunnels_of_Nyrleha = 157,
    Contract_158_Soc__Palm_Fort = 158,
    Contract_159_Soc__Supply_Saboteur = 159,
    Contract_160_Soc__Forgotten_Tunnels_of_Nyrleha = 160,
    Contract_161_Soc__Palm_Fort = 161,
    Contract_162_Soc__Supply_Saboteur = 162,
    Contract_163_Soc__Forgotten_Tunnels_of_Nyrleha = 163,
    Contract_164_Kill__Tenebrous_Rifts = 164,
    Contract_165_Kill__Umbral_Rifts = 165,
    Contract_166_Harlunes_Diplomacy = 166,
    Contract_167_Saving_Asheron = 167,
    Contract_168_Menhir_Research = 168,
    Contract_169_Gear_Knight_Excavation = 169,
    Contract_170_Nexus_Crawl = 170,
    Contract_171_Jester_Released = 171,
    Contract_172_Vision_Quest = 172,
    Contract_173_Aerbaxs_Prodigal_Monouga = 173,
    Contract_174_QotM__Weekly_1 = 174,
    Contract_175_QotM__Weekly_2 = 175,
    Contract_176_QotM__Weekly_3 = 176,
    Contract_177_Deaths_Allure = 177,
    Contract_178_Yanshi_Tunnels = 178,
    Contract_179_Kill__Gurog_Minions = 179,
    Contract_180_Kill__Gurog_Soldiers = 180,
    Contract_181_Kill__Gurog_Henchmen = 181,
    Contract_182_Aerbaxs_Prodigal_Tusker = 182,
    Contract_183_Find_the_Barkeeper = 183,
    Contract_184_Find_the_Barkeeper = 184,
    Contract_185_Find_the_Barkeeper = 185,
    Contract_186_Find_the_Barkeeper = 186,
    Contract_187_Find_the_Pathwarden = 187,
    Contract_188_Find_the_Pathwarden = 188,
    Contract_189_Find_the_Pathwarden = 189,
    Contract_190_Find_the_Pathwarden = 190,
    Contract_191_Drudge_Hideout = 191,
    Contract_192_Holtburg_Redoubt = 192,
    Contract_193_The_Beacon = 193,
    Contract_194_The_Missing_Necklace = 194,
    Contract_195_Braid_Mansion_Ruin = 195,
    Contract_196_Nen_Ais_Pet_Drudge = 196,
    Contract_197_Sea_Temple_Catacombs = 197,
    Contract_198_Under_Cove_Crypt = 198,
    Contract_199_Facility_Hub = 199,
    Contract_200_Jailbreak__Ardent_Leader = 200,
    Contract_201_Jailbreak__Blessed_Leader = 201,
    Contract_202_Jailbreak__Verdant_Leader = 202,
    Contract_203_Jailbreak__General_Population = 203,
    Contract_204_Gurog_Creation = 204,
    Contract_205_Wardley_and_the_Wights = 205,
    Contract_206_Aetherium_Ore_Collection = 206,
    Contract_207_Aetherium_Power_Core_Collection = 207,
    Contract_208_Aetherium_Raid_High = 208,
    Contract_209_Soc__Mana_Siphon_Destruction = 209,
    Contract_210_Kill__Gear_Knight_Knights = 210,
    Contract_211_Kill__Gear_Knight_Commander = 211,
    Contract_212_Nalicanas_Test = 212,
    Contract_213_Bloodstone_Investigation = 213,
    Contract_214_Chasing_Oswald = 214,
    Contract_215_Hunting_Aun_Ralirea = 215,
    Contract_216_Aerbaxs_Prodigal_Monouga = 216,
    Contract_217_Aerbaxs_Prodigal_Drudge = 217,
    Contract_218_Aerbaxs_Prodigal_Human = 218,
    Contract_219_Kidnapped_Handmaiden = 219,
    Contract_220_Sepulcher_of_Nightmares = 220,
    Contract_221_Mhoire_Castle = 221,
    Contract_222_Bobos_Medicine = 222,
    Contract_223_Mhoire_Oubliette = 223,
    Contract_224_Geraines_Study = 224,
    Contract_225_Geraines_Hosts = 225,
    Contract_226_Splitting_Grael_High = 226,
    Contract_227_Splitting_Grael_Mid = 227,
    Contract_228_Splitting_Grael_Low = 228,
    Contract_229_Clutch_of_Kings__Reeshan = 229,
    Contract_230_Clutch_of_Kings__Kiree = 230,
    Contract_231_Clutch_of_Kings__Broodu = 231,
    Contract_232_Clutch_of_Kings__Keerik = 232,
    Contract_233_Clutch_of_Kings__Rehir = 233,
    Contract_234_Clutch_of_Kings__Browerk = 234,
    Contract_235_Clutch_of_Kings__All = 235,
    Contract_236_Kill__Spectral_Archers = 236,
    Contract_237_Kill__Spectral_Minions = 237,
    Contract_238_Kill__Spectral_Nanjou_Shou_jen = 238,
    Contract_239_Kill__Spectral_Mages = 239,
    Contract_240_Kill__Spectral_Bushi = 240,
    Contract_241_Kill__Spectral_Samurai = 241,
    Contract_242_Kill__Spectral_Blades_and_Claws = 242,
    Contract_243_Kill__Spectral_Samurai_Golems = 243,
    Contract_244_Hoshino_Fortress = 244,
    Contract_245_Stipend__General = 245,
    Contract_246_Stipend__Celestial_Hand = 246,
    Contract_247_Stipend__Radiant_Blood = 247,
    Contract_248_Stipend__Eldrytch_Web = 248,
    Contract_249_Jester_Focuses = 249,
    Contract_250_Unleash_the_Gearknights = 250,
    Contract_251_Virindi_Rescue = 251,
    Contract_252_Ninja_Academy = 252,
    Contract_253_Tanada_Slaughter = 253,
    Contract_254_Tanada_Intercept = 254,
    Contract_255_Crystalline_Adventurer = 255,
    Contract_256_Crystalline_Markers = 256,
    Contract_257_Crystalline_Killer = 257,
    Contract_258_Crystalline_Bound_Wisp = 258,
    Contract_259_Nanjou_Stockade = 259,
    Contract_260_Mage_Academy = 260,
    Contract_261_Apostate_Finale = 261,
    Contract_262_Lunnums_Return = 262,
    Contract_263_Lunnums_Pyre = 263,
    Contract_264_Lunnums_Disappearance = 264,
    Contract_265_Lost_Lore = 265,
    Contract_266_Sisters_of_Light = 266,
    Contract_267_First_Sister = 267,
    Contract_268_Second_Sister = 268,
    Contract_269_Third_Sister = 269,
    Contract_270_Ritual_Investigation = 270,
    Contract_271_Ritual_Disruption = 271,
    Contract_272_Defeat_Hoshino_Kei = 272,
    Contract_273_Protecting_Picketed_Pets = 273,
    Contract_274_Buried_Alive = 274,
    Contract_275_Graverobber = 275,
    Contract_276_Escape = 276,
    Contract_277_Deconstruction = 277,
    Contract_278_Uziz_Abductions = 278,
    Contract_279_Golem_Hunters__Mud_Golem_Sludge_Lord = 279,
    Contract_280_Golem_Hunters__Copper_Golem_Kingpin = 280,
    Contract_281_Golem_Hunters__Glacial_Golem_Margrave = 281,
    Contract_282_Golem_Hunters__Magma_Golem_Exarch = 282,
    Contract_283_Golem_Hunters__Coral_Golem_Viceroy = 283,
    Contract_284_Golem_Hunters__Platinum_Golem_Mountain_King = 284,
    Contract_285_Olthoi_Hive_Queen = 285,
    Contract_286_Soc__Mana_Siphon_Destruction = 286,
    Contract_287_Soc__Mana_Siphon_Destruction = 287,
    Contract_288_Soc__Destroy_The_Phalanx = 288,
    Contract_289_Soc__Destroy_The_Phalanx = 289,
    Contract_290_Soc__Destroy_The_Phalanx = 290,
    Contract_291_Soc__Collect_Gear_Knight_Parts = 291,
    Contract_292_Soc__Collect_Gear_Knight_Parts = 292,
    Contract_293_Soc__Collect_Gear_Knight_Parts = 293,
    Contract_294_Kill__Gear_Knight_Squires = 294,
    Contract_295_Behind_The_Mask = 295,
    Contract_296_Frozen_Fortress_Laboratory = 296,
    Contract_297_Frozen_Fortress_Testing_Grounds = 297,
    Contract_298_Olthoi_Hive_Warrior_Pincer = 298,
    Contract_299_Olthoi_Hive_Eviscerator_Pincer = 299,
    Contract_300_Snow_Tusker_Leader_Tusk = 300,
    Contract_301_Journey_To_Madness = 301,
    Contract_302_Visitors = 302,
    Contract_303_Kill__Rynthid_Minions = 303,
    Contract_304_Kill__Empowered_Wisps = 304,
    Contract_305_Kill__Rynthid_Rare_Boss = 305,
    Contract_306_Kill__Rynthid_Slayers = 306,
    Contract_307_Kill__Rynthid_Ragers = 307,
    Contract_308_Kill__Rynthid_Sorcerers = 308,
    Contract_309_Kill__Rynthid_Rifts = 309,
    Contract_310_Legendary_Quests = 310,
    Contract_311_Rynthid_Genesis = 311,
    Contract_312_Changing_Gears = 312,
    Contract_313_Fear_Factory = 313,
    Contract_314_Spirited_Halls = 314,
    Contract_315_End_of_Days = 315,
    Contract_316_Lugian_Assault = 316,
    Contract_317_Rynthid_Training = 317,
    Contract_318_Kill__Tou_Tou_Shadow_Flyers = 318,
    Contract_319_Kill__Tou_Tou_Grievver_Shredders = 319,
    Contract_320_Kill__Tou_Tou_Devourer_Marguls = 320,
    Contract_321_Kill__Tou_Tou_Shadows = 321,
    Contract_322_Kill__Tou_Tou_Void_Lords = 322
}
/*The PropertyInt64 identifies a specific Character or Object int64 property.*/
enum PropertyInt64 {
    TotalExperience = 1,
    AvailableExperience = 2,
    AugmentationCost = 3,
    ItemTotalXp = 4,
    ItemBaseXp = 5,
    AvailableLuminance = 6,
    MaximumLuminance = 7,
    InteractionReqs = 8
}
/*The PropertyBool identifies a specific Character or Object boolean property.*/
enum PropertyBool {
    Undef = 0,
    Stuck = 1,
    Open = 2,
    Locked = 3,
    RotProof = 4,
    AllegianceUpdateRequest = 5,
    AiUsesMana = 6,
    AiUseHumanMagicAnimations = 7,
    AllowGive = 8,
    CurrentlyAttacking = 9,
    AttackerAi = 10,
    IgnoreCollisions = 11,
    ReportCollisions = 12,
    Ethereal = 13,
    GravityStatus = 14,
    LightsStatus = 15,
    ScriptedCollision = 16,
    Inelastic = 17,
    Visibility = 18,
    Attackable = 19,
    SafeSpellComponents = 20,
    AdvocateState = 21,
    Inscribable = 22,
    DestroyOnSell = 23,
    UiHidden = 24,
    IgnoreHouseBarriers = 25,
    HiddenAdmin = 26,
    PkWounder = 27,
    PkKiller = 28,
    NoCorpse = 29,
    UnderLifestoneProtection = 30,
    ItemManaUpdatePending = 31,
    GeneratorStatus = 32,
    ResetMessagePending = 33,
    DefaultOpen = 34,
    DefaultLocked = 35,
    DefaultOn = 36,
    OpenForBusiness = 37,
    IsFrozen = 38,
    DealMagicalItems = 39,
    LogoffImDead = 40,
    ReportCollisionsAsEnvironment = 41,
    AllowEdgeSlide = 42,
    AdvocateQuest = 43,
    IsAdmin = 44,
    IsArch = 45,
    IsSentinel = 46,
    IsAdvocate = 47,
    CurrentlyPoweringUp = 48,
    GeneratorEnteredWorld = 49,
    NeverFailCasting = 50,
    VendorService = 51,
    AiImmobile = 52,
    DamagedByCollisions = 53,
    IsDynamic = 54,
    IsHot = 55,
    IsAffecting = 56,
    AffectsAis = 57,
    SpellQueueActive = 58,
    GeneratorDisabled = 59,
    IsAcceptingTells = 60,
    LoggingChannel = 61,
    OpensAnyLock = 62,
    UnlimitedUse = 63,
    GeneratedTreasureItem = 64,
    IgnoreMagicResist = 65,
    IgnoreMagicArmor = 66,
    AiAllowTrade = 67,
    SpellComponentsRequired = 68,
    IsSellable = 69,
    IgnoreShieldsBySkill = 70,
    NoDraw = 71,
    ActivationUntargeted = 72,
    HouseHasGottenPriorityBootPos = 73,
    GeneratorAutomaticDestruction = 74,
    HouseHooksVisible = 75,
    HouseRequiresMonarch = 76,
    HouseHooksEnabled = 77,
    HouseNotifiedHudOfHookCount = 78,
    AiAcceptEverything = 79,
    IgnorePortalRestrictions = 80,
    RequiresBackpackSlot = 81,
    DontTurnOrMoveWhenGiving = 82,
    NpcLooksLikeObject = 83,
    IgnoreCloIcons = 84,
    AppraisalHasAllowedWielder = 85,
    ChestRegenOnClose = 86,
    LogoffInMinigame = 87,
    PortalShowDestination = 88,
    PortalIgnoresPkAttackTimer = 89,
    NpcInteractsSilently = 90,
    Retained = 91,
    IgnoreAuthor = 92,
    Limbo = 93,
    AppraisalHasAllowedActivator = 94,
    ExistedBeforeAllegianceXpChanges = 95,
    IsDeaf = 96,
    IsPsr = 97,
    Invincible = 98,
    Ivoryable = 99,
    Dyable = 100,
    CanGenerateRare = 101,
    CorpseGeneratedRare = 102,
    NonProjectileMagicImmune = 103,
    ActdReceivedItems = 104,
    Unknown105 = 105,
    FirstEnterWorldDone = 106,
    RecallsDisabled = 107,
    RareUsesTimer = 108,
    ActdPreorderReceivedItems = 109,
    Afk = 110,
    IsGagged = 111,
    ProcSpellSelfTargeted = 112,
    IsAllegianceGagged = 113,
    EquipmentSetTriggerPiece = 114,
    Uninscribe = 115,
    WieldOnUse = 116,
    ChestClearedWhenClosed = 117,
    NeverAttack = 118,
    SuppressGenerateEffect = 119,
    TreasureCorpse = 120,
    EquipmentSetAddLevel = 121,
    BarberActive = 122,
    TopLayerPriority = 123,
    NoHeldItemShown = 124,
    LoginAtLifestone = 125,
    OlthoiPk = 126,
    Account15Days = 127,
    HadNoVitae = 128,
    NoOlthoiTalk = 129,
    AutowieldLeft = 130
}
/*The DataPropertyId identifies a specific Character or Object data property.*/
enum PropertyDataId {
    Setup = 1,
    MotionTable = 2,
    SoundTable = 3,
    CombatTable = 4,
    QualityFilter = 5,
    PaletteBase = 6,
    ClothingBase = 7,
    Icon = 8,
    EyesTexture = 9,
    NoseTexture = 10,
    MouthTexture = 11,
    DefaultEyesTexture = 12,
    DefaultNoseTexture = 13,
    DefaultMouthTexture = 14,
    HairPalette = 15,
    EyesPalette = 16,
    SkinPalette = 17,
    HeadObject = 18,
    ActivationAnimation = 19,
    InitMotion = 20,
    ActivationSound = 21,
    PhysicsEffectTable = 22,
    UseSound = 23,
    UseTargetAnimation = 24,
    UseTargetSuccessAnimation = 25,
    UseTargetFailureAnimation = 26,
    UseUserAnimation = 27,
    Spell = 28,
    SpellComponent = 29,
    PhysicsScript = 30,
    LinkedPortalOne = 31,
    WieldedTreasureType = 32,
    InventoryTreasureType = 33,
    ShopTreasureType = 34,
    DeathTreasureType = 35,
    MutateFilter = 36,
    ItemSkillLimit = 37,
    UseCreateItem = 38,
    DeathSpell = 39,
    VendorsClassId = 40,
    ItemSpecializedOnly = 41,
    HouseId = 42,
    AccountHouseId = 43,
    RestrictionEffect = 44,
    CreationMutationFilter = 45,
    TsysMutationFilter = 46,
    LastPortal = 47,
    LinkedPortalTwo = 48,
    OriginalPortal = 49,
    IconOverlay = 50,
    IconOverlaySecondary = 51,
    IconUnderlay = 52,
    AugmentationMutationFilter = 53,
    AugmentationEffect = 54,
    ProcSpell = 55,
    AugmentationCreateItem = 56,
    AlternateCurrency = 57,
    BlueSurgeSpell = 58,
    YellowSurgeSpell = 59,
    RedSurgeSpell = 60,
    OlthoiDeathTreasureType = 61
}
/*The PropertyInt identifies a specific Character or Object int property.*/
enum PropertyInt {
    ItemType = 1,
    CreatureType = 2,
    PaletteTemplate = 3,
    ClothingPriority = 4,
    EncumbranceVal = 5,
    ItemsCapacity = 6,
    ContainersCapacity = 7,
    Mass = 8,
    ValidLocations = 9,
    CurrentWieldedLocation = 10,
    MaxStackSize = 11,
    StackSize = 12,
    StackUnitEncumbrance = 13,
    StackUnitMass = 14,
    StackUnitValue = 15,
    ItemUseable = 16,
    RareId = 17,
    UiEffects = 18,
    Value = 19,
    CoinValue = 20,
    TotalExperience = 21,
    AvailableCharacter = 22,
    TotalSkillCredits = 23,
    AvailableSkillCredits = 24,
    Level = 25,
    AccountRequirements = 26,
    ArmorType = 27,
    ArmorLevel = 28,
    AllegianceCpPool = 29,
    AllegianceRank = 30,
    ChannelsAllowed = 31,
    ChannelsActive = 32,
    Bonded = 33,
    MonarchsRank = 34,
    AllegianceFollowers = 35,
    ResistMagic = 36,
    ResistItemAppraisal = 37,
    ResistLockpick = 38,
    DeprecatedResistRepair = 39,
    CombatMode = 40,
    CurrentAttackHeight = 41,
    CombatCollisions = 42,
    NumDeaths = 43,
    Damage = 44,
    DamageType = 45,
    DefaultCombatStyle = 46,
    AttackType = 47,
    WeaponSkill = 48,
    WeaponTime = 49,
    AmmoType = 50,
    CombatUse = 51,
    ParentLocation = 52,
    PlacementPosition = 53,
    WeaponEncumbrance = 54,
    WeaponMass = 55,
    ShieldValue = 56,
    ShieldEncumbrance = 57,
    MissileInventoryLocation = 58,
    FullDamageType = 59,
    WeaponRange = 60,
    AttackersSkill = 61,
    DefendersSkill = 62,
    AttackersSkillValue = 63,
    AttackersClass = 64,
    Placement = 65,
    CheckpointStatus = 66,
    Tolerance = 67,
    TargetingTactic = 68,
    CombatTactic = 69,
    HomesickTargetingTactic = 70,
    NumFollowFailures = 71,
    FriendType = 72,
    FoeType = 73,
    MerchandiseItemTypes = 74,
    MerchandiseMinValue = 75,
    MerchandiseMaxValue = 76,
    NumItemsSold = 77,
    NumItemsBought = 78,
    MoneyIncome = 79,
    MoneyOutflow = 80,
    MaxGeneratedObjects = 81,
    InitGeneratedObjects = 82,
    ActivationResponse = 83,
    OriginalValue = 84,
    NumMoveFailures = 85,
    MinLevel = 86,
    MaxLevel = 87,
    LockpickMod = 88,
    BoosterEnum = 89,
    BoostValue = 90,
    MaxStructure = 91,
    Structure = 92,
    PhysicsState = 93,
    TargetType = 94,
    RadarBlipColor = 95,
    EncumbranceCapacity = 96,
    LoginTimestamp = 97,
    CreationTimestamp = 98,
    PkLevelModifier = 99,
    GeneratorType = 100,
    AiAllowedCombatStyle = 101,
    LogoffTimestamp = 102,
    GeneratorDestructionType = 103,
    ActivationCreateClass = 104,
    ItemWorkmanship = 105,
    ItemSpellcraft = 106,
    ItemCurMana = 107,
    ItemMaxMana = 108,
    ItemDifficulty = 109,
    ItemAllegianceRankLimit = 110,
    PortalBitmask = 111,
    AdvocateLevel = 112,
    Gender = 113,
    Attuned = 114,
    ItemSkillLevelLimit = 115,
    GateLogic = 116,
    ItemManaCost = 117,
    Logoff = 118,
    Active = 119,
    AttackHeight = 120,
    NumAttackFailures = 121,
    AiCpThreshold = 122,
    AiAdvancementStrategy = 123,
    Version = 124,
    Age = 125,
    VendorHappyMean = 126,
    VendorHappyVariance = 127,
    CloakStatus = 128,
    VitaeCpPool = 129,
    NumServicesSold = 130,
    MaterialType = 131,
    NumAllegianceBreaks = 132,
    ShowableOnRadar = 133,
    PlayerKillerStatus = 134,
    VendorHappyMaxItems = 135,
    ScorePageNum = 136,
    ScoreConfigNum = 137,
    ScoreNumScores = 138,
    DeathLevel = 139,
    AiOptions = 140,
    OpenToEveryone = 141,
    GeneratorTimeType = 142,
    GeneratorStartTime = 143,
    GeneratorEndTime = 144,
    GeneratorEndDestructionType = 145,
    XpOverride = 146,
    NumCrashAndTurns = 147,
    ComponentWarningThreshold = 148,
    HouseStatus = 149,
    HookPlacement = 150,
    HookType = 151,
    HookItemType = 152,
    AiPpThreshold = 153,
    GeneratorVersion = 154,
    HouseType = 155,
    PickupEmoteOffset = 156,
    WeenieIteration = 157,
    WieldRequirements = 158,
    WieldSkillType = 159,
    WieldDifficulty = 160,
    HouseMaxHooksUsable = 161,
    HouseCurrentHooksUsable = 162,
    AllegianceMinLevel = 163,
    AllegianceMaxLevel = 164,
    HouseRelinkHookCount = 165,
    SlayerCreatureType = 166,
    ConfirmationInProgress = 167,
    ConfirmationTypeInProgress = 168,
    TsysMutationData = 169,
    NumItemsInMaterial = 170,
    NumTimesTinkered = 171,
    AppraisalLongDescDecoration = 172,
    AppraisalLockpickSuccessPercent = 173,
    AppraisalPages = 174,
    AppraisalMaxPages = 175,
    AppraisalItemSkill = 176,
    GemCount = 177,
    GemType = 178,
    ImbuedEffect = 179,
    AttackersRawSkillValue = 180,
    ChessRank = 181,
    ChessTotalGames = 182,
    ChessGamesWon = 183,
    ChessGamesLost = 184,
    TypeOfAlteration = 185,
    SkillToBeAltered = 186,
    SkillAlterationCount = 187,
    HeritageGroup = 188,
    TransferFromAttribute = 189,
    TransferToAttribute = 190,
    AttributeTransferCount = 191,
    FakeFishingSkill = 192,
    NumKeys = 193,
    DeathTimestamp = 194,
    PkTimestamp = 195,
    VictimTimestamp = 196,
    HookGroup = 197,
    AllegianceSwearTimestamp = 198,
    HousePurchaseTimestamp = 199,
    RedirectableEquippedArmorCount = 200,
    MeleeDefenseImbuedEffectTypeCache = 201,
    MissileDefenseImbuedEffectTypeCache = 202,
    MagicDefenseImbuedEffectTypeCache = 203,
    ElementalDamageBonus = 204,
    ImbueAttempts = 205,
    ImbueSuccesses = 206,
    CreatureKills = 207,
    PlayerKillsPk = 208,
    PlayerKillsPkl = 209,
    RaresTierOne = 210,
    RaresTierTwo = 211,
    RaresTierThree = 212,
    RaresTierFour = 213,
    RaresTierFive = 214,
    AugmentationStat = 215,
    AugmentationFamilyStat = 216,
    AugmentationInnateFamily = 217,
    AugmentationInnateStrength = 218,
    AugmentationInnateEndurance = 219,
    AugmentationInnateCoordination = 220,
    AugmentationInnateQuickness = 221,
    AugmentationInnateFocus = 222,
    AugmentationInnateSelf = 223,
    AugmentationSpecializeSalvaging = 224,
    AugmentationSpecializeItemTinkering = 225,
    AugmentationSpecializeArmorTinkering = 226,
    AugmentationSpecializeMagicItemTinkering = 227,
    AugmentationSpecializeWeaponTinkering = 228,
    AugmentationExtraPackSlot = 229,
    AugmentationIncreasedCarryingCapacity = 230,
    AugmentationLessDeathItemLoss = 231,
    AugmentationSpellsRemainPastDeath = 232,
    AugmentationCriticalDefense = 233,
    AugmentationBonusXp = 234,
    AugmentationBonusSalvage = 235,
    AugmentationBonusImbueChance = 236,
    AugmentationFasterRegen = 237,
    AugmentationIncreasedSpellDuration = 238,
    AugmentationResistanceFamily = 239,
    AugmentationResistanceSlash = 240,
    AugmentationResistancePierce = 241,
    AugmentationResistanceBlunt = 242,
    AugmentationResistanceAcid = 243,
    AugmentationResistanceFire = 244,
    AugmentationResistanceFrost = 245,
    AugmentationResistanceLightning = 246,
    RaresTierOneLogin = 247,
    RaresTierTwoLogin = 248,
    RaresTierThreeLogin = 249,
    RaresTierFourLogin = 250,
    RaresTierFiveLogin = 251,
    RaresLoginTimestamp = 252,
    RaresTierSix = 253,
    RaresTierSeven = 254,
    RaresTierSixLogin = 255,
    RaresTierSevenLogin = 256,
    ItemAttributeLimit = 257,
    ItemAttributeLevelLimit = 258,
    ItemAttribute2ndLimit = 259,
    ItemAttribute2ndLevelLimit = 260,
    CharacterTitleId = 261,
    NumCharacterTitles = 262,
    ResistanceModifierType = 263,
    FreeTinkersBitfield = 264,
    EquipmentSetId = 265,
    PetClass = 266,
    Lifespan = 267,
    RemainingLifespan = 268,
    UseCreateQuantity = 269,
    WieldRequirements2 = 270,
    WieldSkillType2 = 271,
    WieldDifficulty2 = 272,
    WieldRequirements3 = 273,
    WieldSkillType3 = 274,
    WieldDifficulty3 = 275,
    WieldRequirements4 = 276,
    WieldSkillType4 = 277,
    WieldDifficulty4 = 278,
    Unique = 279,
    SharedCooldown = 280,
    Faction1Bits = 281,
    Faction2Bits = 282,
    Faction3Bits = 283,
    Hatred1Bits = 284,
    Hatred2Bits = 285,
    Hatred3Bits = 286,
    SocietyRankCelhan = 287,
    SocietyRankEldweb = 288,
    SocietyRankRadblo = 289,
    HearLocalSignals = 290,
    HearLocalSignalsRadius = 291,
    Cleaving = 292,
    AugmentationSpecializeGearcraft = 293,
    AugmentationInfusedCreatureMagic = 294,
    AugmentationInfusedItemMagic = 295,
    AugmentationInfusedLifeMagic = 296,
    AugmentationInfusedWarMagic = 297,
    AugmentationCriticalExpertise = 298,
    AugmentationCriticalPower = 299,
    AugmentationSkilledMelee = 300,
    AugmentationSkilledMissile = 301,
    AugmentationSkilledMagic = 302,
    ImbuedEffect2 = 303,
    ImbuedEffect3 = 304,
    ImbuedEffect4 = 305,
    ImbuedEffect5 = 306,
    DamageRating = 307,
    DamageResistRating = 308,
    AugmentationDamageBonus = 309,
    AugmentationDamageReduction = 310,
    ImbueStackingBits = 311,
    HealOverTime = 312,
    CritRating = 313,
    CritDamageRating = 314,
    CritResistRating = 315,
    CritDamageResistRating = 316,
    HealingResistRating = 317,
    DamageOverTime = 318,
    ItemMaxLevel = 319,
    ItemXpStyle = 320,
    EquipmentSetExtra = 321,
    AetheriaBitfield = 322,
    HealingBoostRating = 323,
    HeritageSpecificArmor = 324,
    AlternateRacialSkills = 325,
    AugmentationJackOfAllTrades = 326,
    AugmentationResistanceNether = 327,
    AugmentationInfusedVoidMagic = 328,
    WeaknessRating = 329,
    NetherOverTime = 330,
    NetherResistRating = 331,
    LuminanceAward = 332,
    LumAugDamageRating = 333,
    LumAugDamageReductionRating = 334,
    LumAugCritDamageRating = 335,
    LumAugCritReductionRating = 336,
    LumAugSurgeEffectRating = 337,
    LumAugSurgeChanceRating = 338,
    LumAugItemManaUsage = 339,
    LumAugItemManaGain = 340,
    LumAugVitality = 341,
    LumAugHealingRating = 342,
    LumAugSkilledCraft = 343,
    LumAugSkilledSpec = 344,
    LumAugNoDestroyCraft = 345,
    RestrictInteraction = 346,
    OlthoiLootTimestamp = 347,
    OlthoiLootStep = 348,
    UseCreatesContractId = 349,
    DotResistRating = 350,
    LifeResistRating = 351,
    CloakWeaveProc = 352,
    WeaponType = 353,
    MeleeMastery = 354,
    RangedMastery = 355,
    SneakAttackRating = 356,
    RecklessnessRating = 357,
    DeceptionRating = 358,
    CombatPetRange = 359,
    WeaponAuraDamage = 360,
    WeaponAuraSpeed = 361,
    SummoningMastery = 362,
    HeartbeatLifespan = 363,
    UseLevelRequirement = 364,
    LumAugAllSkills = 365,
    UseRequiresSkill = 366,
    UseRequiresSkillLevel = 367,
    UseRequiresSkillSpec = 368,
    UseRequiresLevel = 369,
    GearDamage = 370,
    GearDamageResist = 371,
    GearCrit = 372,
    GearCritResist = 373,
    GearCritDamage = 374,
    GearCritDamageResist = 375,
    GearHealingBoost = 376,
    GearNetherResist = 377,
    GearLifeResist = 378,
    GearMaxHealth = 379,
    Unknown380 = 380,
    PKDamageRating = 381,
    PKDamageResistRating = 382,
    GearPKDamageRating = 383,
    GearPKDamageResistRating = 384,
    Unknown385 = 385,
    Overpower = 386,
    OverpowerResist = 387,
    GearOverpower = 388,
    GearOverpowerResist = 389,
    Enlightenment = 390
}
/*The PropertyInstanceId identifies a specific Character or Object instance property.*/
enum PropertyInstanceId {
    Owner = 1,
    Container = 2,
    Wielder = 3,
    Freezer = 4,
    Viewer = 5,
    Generator = 6,
    Scribe = 7,
    CurrentCombatTarget = 8,
    CurrentEnemy = 9,
    ProjectileLauncher = 10,
    CurrentAttacker = 11,
    CurrentDamager = 12,
    CurrentFollowTarget = 13,
    CurrentAppraisalTarget = 14,
    CurrentFellowshipAppraisalTarget = 15,
    ActivationTarget = 16,
    Creator = 17,
    Victim = 18,
    Killer = 19,
    Vendor = 20,
    Customer = 21,
    Bonded = 22,
    Wounder = 23,
    Allegiance = 24,
    Patron = 25,
    Monarch = 26,
    CombatTarget = 27,
    HealthQueryTarget = 28,
    LastUnlocker = 29,
    CrashAndTurnTarget = 30,
    AllowedActivator = 31,
    HouseOwner = 32,
    House = 33,
    Slumlord = 34,
    ManaQueryTarget = 35,
    CurrentGame = 36,
    RequestedAppraisalTarget = 37,
    AllowedWielder = 38,
    AssignedTarget = 39,
    LimboSource = 40,
    Snooper = 41,
    TeleportedCharacter = 42,
    Pet = 43,
    PetOwner = 44,
    PetDevice = 45
}
/*The PropertyPosition identifies a specific Character or Object position property.*/
enum PropertyPosition {
    /*Current Position*/
    Location = 1,
    /*May be used to store where we are headed when we teleport (?)*/
    Destination = 2,
    /*Where will we pop into the world (?)*/
    Instantiation = 3,
    /*Last Lifestone Used? (@ls)? | @home | @save | @recall*/
    Sanctuary = 4,
    /*This is the home, starting, or base position of an object. It's usually the position the object first spawned in at.*/
    Home = 5,
    /*The need to research*/
    ActivationMove = 6,
    /*The the position of target.*/
    Target = 7,
    /*Primary Portal Recall | Summon Primary Portal | Primary Portal Tie*/
    LinkedPortalOne = 8,
    /*Portal Recall (Last Used Portal that can be recalled to)*/
    LastPortal = 9,
    /*The portal storm - need research - maybe where you were portaled from or to - to does not seem likely to me.*/
    PortalStorm = 10,
    /*The crash and turn - I can't wait to find out.*/
    CrashAndTurn = 11,
    /*We are tracking what the portal ties are - could this be the physical location of the portal you summoned?   More research needed.*/
    PortalSummonLoc = 12,
    /*That little spot you get sent to just outside the barrier when the slum lord evicts you (??)*/
    HouseBoot = 13,
    /*The last outside death. --- boy would I love to extend this to cover deaths in dungeons as well.*/
    LastOutsideDeath = 14,
    /*The linked lifestone - Lifestone Recall | Lifestone Tie*/
    LinkedLifestone = 15,
    /*Secondary Portal Recall | Summon Secondary Portal | Secondary Portal Tie*/
    LinkedPortalTwo = 16,
    /*Admin Quick Recall Position 1*/
    Save1 = 17,
    /*Admin Quick Recall Position 2*/
    Save2 = 18,
    /*Admin Quick Recall Position 3*/
    Save3 = 19,
    /*Admin Quick Recall Position 4*/
    Save4 = 20,
    /*Admin Quick Recall Position 5*/
    Save5 = 21,
    /*Admin Quick Recall Position 6*/
    Save6 = 22,
    /*Admin Quick Recall Position 7*/
    Save7 = 23,
    /*Admin Quick Recall Position 8*/
    Save8 = 24,
    /*Admin Quick Recall Position 9*/
    Save9 = 25,
    /*Position data is relative to Location*/
    RelativeDestination = 26,
    /*Admin - Position to return player to when using @telereturn which is where a character was at time of admin using @teletome*/
    TeleportedCharacter = 27
}
/*The PropertyString identifies a specific Character or Object string property.*/
enum PropertyString {
    Name = 1,
    Title = 2,
    Sex = 3,
    HeritageGroup = 4,
    Template = 5,
    AttackersName = 6,
    Inscription = 7,
    ScribeName = 8,
    VendorsName = 9,
    Fellowship = 10,
    MonarchsName = 11,
    LockCode = 12,
    KeyCode = 13,
    Use = 14,
    ShortDesc = 15,
    LongDesc = 16,
    ActivationTalk = 17,
    UseMessage = 18,
    ItemHeritageGroupRestriction = 19,
    PluralName = 20,
    MonarchsTitle = 21,
    ActivationFailure = 22,
    ScribeAccount = 23,
    TownName = 24,
    CraftsmanName = 25,
    UsePkServerError = 26,
    ScoreCachedText = 27,
    ScoreDefaultEntryFormat = 28,
    ScoreFirstEntryFormat = 29,
    ScoreLastEntryFormat = 30,
    ScoreOnlyEntryFormat = 31,
    ScoreNoEntry = 32,
    Quest = 33,
    GeneratorEvent = 34,
    PatronsTitle = 35,
    HouseOwnerName = 36,
    QuestRestriction = 37,
    AppraisalPortalDestination = 38,
    TinkerName = 39,
    ImbuerName = 40,
    HouseOwnerAccount = 41,
    DisplayName = 42,
    DateOfBirth = 43,
    ThirdPartyApi = 44,
    KillQuest = 45,
    Afk = 46,
    AllegianceName = 47,
    AugmentationAddQuest = 48,
    KillQuest2 = 49,
    KillQuest3 = 50,
    UseSendsSignal = 51,
    GearPlatingName = 52
}
/*The PropertyFloat identifies a specific Character or Object float property.*/
enum PropertyFloat {
    Undef = 0,
    HeartbeatInterval = 1,
    HeartbeatTimestamp = 2,
    HealthRate = 3,
    StaminaRate = 4,
    ManaRate = 5,
    HealthUponResurrection = 6,
    StaminaUponResurrection = 7,
    ManaUponResurrection = 8,
    StartTime = 9,
    StopTime = 10,
    ResetInterval = 11,
    Shade = 12,
    ArmorModVsSlash = 13,
    ArmorModVsPierce = 14,
    ArmorModVsBludgeon = 15,
    ArmorModVsCold = 16,
    ArmorModVsFire = 17,
    ArmorModVsAcid = 18,
    ArmorModVsElectric = 19,
    CombatSpeed = 20,
    WeaponLength = 21,
    DamageVariance = 22,
    CurrentPowerMod = 23,
    AccuracyMod = 24,
    StrengthMod = 25,
    MaximumVelocity = 26,
    RotationSpeed = 27,
    MotionTimestamp = 28,
    WeaponDefense = 29,
    WimpyLevel = 30,
    VisualAwarenessRange = 31,
    AuralAwarenessRange = 32,
    PerceptionLevel = 33,
    PowerupTime = 34,
    MaxChargeDistance = 35,
    ChargeSpeed = 36,
    BuyPrice = 37,
    SellPrice = 38,
    DefaultScale = 39,
    LockpickMod = 40,
    RegenerationInterval = 41,
    RegenerationTimestamp = 42,
    GeneratorRadius = 43,
    TimeToRot = 44,
    DeathTimestamp = 45,
    PkTimestamp = 46,
    VictimTimestamp = 47,
    LoginTimestamp = 48,
    CreationTimestamp = 49,
    MinimumTimeSincePk = 50,
    DeprecatedHousekeepingPriority = 51,
    AbuseLoggingTimestamp = 52,
    LastPortalTeleportTimestamp = 53,
    UseRadius = 54,
    HomeRadius = 55,
    ReleasedTimestamp = 56,
    MinHomeRadius = 57,
    Facing = 58,
    ResetTimestamp = 59,
    LogoffTimestamp = 60,
    EconRecoveryInterval = 61,
    WeaponOffense = 62,
    DamageMod = 63,
    ResistSlash = 64,
    ResistPierce = 65,
    ResistBludgeon = 66,
    ResistFire = 67,
    ResistCold = 68,
    ResistAcid = 69,
    ResistElectric = 70,
    ResistHealthBoost = 71,
    ResistStaminaDrain = 72,
    ResistStaminaBoost = 73,
    ResistManaDrain = 74,
    ResistManaBoost = 75,
    Translucency = 76,
    PhysicsScriptIntensity = 77,
    Friction = 78,
    Elasticity = 79,
    AiUseMagicDelay = 80,
    ItemMinSpellcraftMod = 81,
    ItemMaxSpellcraftMod = 82,
    ItemRankProbability = 83,
    Shade2 = 84,
    Shade3 = 85,
    Shade4 = 86,
    ItemEfficiency = 87,
    ItemManaUpdateTimestamp = 88,
    SpellGestureSpeedMod = 89,
    SpellStanceSpeedMod = 90,
    AllegianceAppraisalTimestamp = 91,
    PowerLevel = 92,
    AccuracyLevel = 93,
    AttackAngle = 94,
    AttackTimestamp = 95,
    CheckpointTimestamp = 96,
    SoldTimestamp = 97,
    UseTimestamp = 98,
    UseLockTimestamp = 99,
    HealkitMod = 100,
    FrozenTimestamp = 101,
    HealthRateMod = 102,
    AllegianceSwearTimestamp = 103,
    ObviousRadarRange = 104,
    HotspotCycleTime = 105,
    HotspotCycleTimeVariance = 106,
    SpamTimestamp = 107,
    SpamRate = 108,
    BondWieldedTreasure = 109,
    BulkMod = 110,
    SizeMod = 111,
    GagTimestamp = 112,
    GeneratorUpdateTimestamp = 113,
    DeathSpamTimestamp = 114,
    DeathSpamRate = 115,
    WildAttackProbability = 116,
    FocusedProbability = 117,
    CrashAndTurnProbability = 118,
    CrashAndTurnRadius = 119,
    CrashAndTurnBias = 120,
    GeneratorInitialDelay = 121,
    AiAcquireHealth = 122,
    AiAcquireStamina = 123,
    AiAcquireMana = 124,
    ResistHealthDrain = 125,
    LifestoneProtectionTimestamp = 126,
    AiCounteractEnchantment = 127,
    AiDispelEnchantment = 128,
    TradeTimestamp = 129,
    AiTargetedDetectionRadius = 130,
    EmotePriority = 131,
    LastTeleportStartTimestamp = 132,
    EventSpamTimestamp = 133,
    EventSpamRate = 134,
    InventoryOffset = 135,
    CriticalMultiplier = 136,
    ManaStoneDestroyChance = 137,
    SlayerDamageBonus = 138,
    AllegianceInfoSpamTimestamp = 139,
    AllegianceInfoSpamRate = 140,
    NextSpellcastTimestamp = 141,
    AppraisalRequestedTimestamp = 142,
    AppraisalHeartbeatDueTimestamp = 143,
    ManaConversionMod = 144,
    LastPkAttackTimestamp = 145,
    FellowshipUpdateTimestamp = 146,
    CriticalFrequency = 147,
    LimboStartTimestamp = 148,
    WeaponMissileDefense = 149,
    WeaponMagicDefense = 150,
    IgnoreShield = 151,
    ElementalDamageMod = 152,
    StartMissileAttackTimestamp = 153,
    LastRareUsedTimestamp = 154,
    IgnoreArmor = 155,
    ProcSpellRate = 156,
    ResistanceModifier = 157,
    AllegianceGagTimestamp = 158,
    AbsorbMagicDamage = 159,
    CachedMaxAbsorbMagicDamage = 160,
    GagDuration = 161,
    AllegianceGagDuration = 162,
    GlobalXpMod = 163,
    HealingModifier = 164,
    ArmorModVsNether = 165,
    ResistNether = 166,
    CooldownDuration = 167,
    WeaponAuraOffense = 168,
    WeaponAuraDefense = 169,
    WeaponAuraElemental = 170,
    WeaponAuraManaConv = 171
}
/*Chat channels*/
enum Channel {
    Undef = 0,
    Abuse = 1,
    Admin = 2,
    Audit = 4,
    Advocate1 = 8,
    Advocate2 = 16,
    Advocate3 = 32,
    QA1 = 64,
    QA2 = 128,
    Debug = 256,
    Sentinel = 512,
    Help = 1024,
    AllBroadcast = 1025,
    ValidChans = 1855,
    Fellow = 2048,
    Vassals = 4096,
    Patron = 8192,
    Monarch = 16384,
    AlArqas = 32768,
    Holtburg = 65536,
    Lytelthorpe = 131072,
    Nanto = 262144,
    Rithwic = 524288,
    Samsur = 1048576,
    Shoushi = 2097152,
    Yanshi = 4194304,
    Yaraq = 8388608,
    TownChans = 16744448,
    CoVassals = 16777216,
    AllegianceBroadcast = 33554432,
    FellowBroadcast = 67108864,
    SocietyCelHanBroadcast = 134217728,
    SocietyEldWebBroadcast = 268435456,
    SocietyRadBloBroadcast = 536870912,
    Olthoi = 1073741824,
    GhostChans = 2130737152,
    AllChans = 2130739007
}
/*Equipment Set Ids*/
enum EquipmentSet {
    None = 0,
    Test = 1,
    Test2 = 2,
    Unknown3 = 3,
    CarraidasBenediction = 4,
    NobleRelic = 5,
    AncientRelic = 6,
    AlduressaRelic = 7,
    Ninja = 8,
    EmpyreanRings = 9,
    ArmMindHeart = 10,
    ArmorPerfectLight = 11,
    ArmorPerfectLight2 = 12,
    Soldiers = 13,
    Adepts = 14,
    Archers = 15,
    Defenders = 16,
    Tinkers = 17,
    Crafters = 18,
    Hearty = 19,
    Dexterous = 20,
    Wise = 21,
    Swift = 22,
    Hardened = 23,
    Reinforced = 24,
    Interlocking = 25,
    Flameproof = 26,
    Acidproof = 27,
    Coldproof = 28,
    Lightningproof = 29,
    SocietyArmor = 30,
    ColosseumClothing = 31,
    GraveyardClothing = 32,
    OlthoiClothing = 33,
    NoobieArmor = 34,
    AetheriaDefense = 35,
    AetheriaDestruction = 36,
    AetheriaFury = 37,
    AetheriaGrowth = 38,
    AetheriaVigor = 39,
    RareDamageResistance = 40,
    RareDamageBoost = 41,
    OlthoiArmorDRed = 42,
    OlthoiArmorCRat = 43,
    OlthoiArmorCRed = 44,
    OlthoiArmorDRat = 45,
    AlduressaRelicUpgrade = 46,
    AncientRelicUpgrade = 47,
    NobleRelicUpgrade = 48,
    CloakAlchemy = 49,
    CloakArcaneLore = 50,
    CloakArmorTinkering = 51,
    CloakAssessPerson = 52,
    CloakLightWeapons = 53,
    CloakMissileWeapons = 54,
    CloakCooking = 55,
    CloakCreatureEnchantment = 56,
    CloakCrossbow = 57,
    CloakFinesseWeapons = 58,
    CloakDeception = 59,
    CloakFletching = 60,
    CloakHealing = 61,
    CloakItemEnchantment = 62,
    CloakItemTinkering = 63,
    CloakLeadership = 64,
    CloakLifeMagic = 65,
    CloakLoyalty = 66,
    CloakMace = 67,
    CloakMagicDefense = 68,
    CloakMagicItemTinkering = 69,
    CloakManaConversion = 70,
    CloakMeleeDefense = 71,
    CloakMissileDefense = 72,
    CloakSalvaging = 73,
    CloakSpear = 74,
    CloakStaff = 75,
    CloakHeavyWeapons = 76,
    CloakThrownWeapon = 77,
    CloakTwoHandedCombat = 78,
    CloakUnarmedCombat = 79,
    CloakVoidMagic = 80,
    CloakWarMagic = 81,
    CloakWeaponTinkering = 82,
    CloakAssessCreature = 83,
    CloakDirtyFighting = 84,
    CloakDualWield = 85,
    CloakRecklessness = 86,
    CloakShield = 87,
    CloakSneakAttack = 88,
    Ninja_New = 89,
    CloakSummoning = 90,
    ShroudedSoul = 91,
    DarkenedMind = 92,
    CloudedSpirit = 93,
    MinorStingingShroudedSoul = 94,
    MinorSparkingShroudedSoul = 95,
    MinorSmolderingShroudedSoul = 96,
    MinorShiveringShroudedSoul = 97,
    MinorStingingDarkenedMind = 98,
    MinorSparkingDarkenedMind = 99,
    MinorSmolderingDarkenedMind = 100,
    MinorShiveringDarkenedMind = 101,
    MinorStingingCloudedSpirit = 102,
    MinorSparkingCloudedSpirit = 103,
    MinorSmolderingCloudedSpirit = 104,
    MinorShiveringCloudedSpirit = 105,
    MajorStingingShroudedSoul = 106,
    MajorSparkingShroudedSoul = 107,
    MajorSmolderingShroudedSoul = 108,
    MajorShiveringShroudedSoul = 109,
    MajorStingingDarkenedMind = 110,
    MajorSparkingDarkenedMind = 111,
    MajorSmolderingDarkenedMind = 112,
    MajorShiveringDarkenedMind = 113,
    MajorStingingCloudedSpirit = 114,
    MajorSparkingCloudedSpirit = 115,
    MajorSmolderingCloudedSpirit = 116,
    MajorShiveringCloudedSpirit = 117,
    BlackfireStingingShroudedSoul = 118,
    BlackfireSparkingShroudedSoul = 119,
    BlackfireSmolderingShroudedSoul = 120,
    BlackfireShiveringShroudedSoul = 121,
    BlackfireStingingDarkenedMind = 122,
    BlackfireSparkingDarkenedMind = 123,
    BlackfireSmolderingDarkenedMind = 124,
    BlackfireShiveringDarkenedMind = 125,
    BlackfireStingingCloudedSpirit = 126,
    BlackfireSparkingCloudedSpirit = 127,
    BlackfireSmolderingCloudedSpirit = 128,
    BlackfireShiveringCloudedSpirit = 129,
    ShimmeringShadowsSet = 130,
    BrownSocietyLocket = 131,
    YellowSocietyLocket = 132,
    RedSocietyBand = 133,
    GreenSocietyBand = 134,
    PurpleSocietyBand = 135,
    BlueSocietyBand = 136,
    GauntletGarb = 137,
    ParagonMissile = 138,
    ParagonCaster = 139,
    ParagonMelee = 140
}
/*Radar Color*/
enum RadarColor {
    Default = 0,
    Blue = 1,
    Gold = 2,
    White = 3,
    Purple = 4,
    Red = 5,
    Pink = 6,
    Green = 7,
    Yellow = 8,
    Cyan = 9,
    BrightGreen = 16
}
/*Flags that determine what data is contained in the EnchantmentRegistry*/
enum EnchantmentRegistryFlags {
    LifeSpells = 1,
    CreatureSpells = 2,
    Vitae = 4,
    Cooldowns = 8
}
enum SpellCategory {
    Undef = 0,
    StrengthRaising = 1,
    StrengthLowering = 2,
    EnduranceRaising = 3,
    EnduranceLowering = 4,
    QuicknessRaising = 5,
    QuicknessLowering = 6,
    CoordinationRaising = 7,
    CoordinationLowering = 8,
    FocusRaising = 9,
    FocusLowering = 10,
    SelfRaising = 11,
    SelfLowering = 12,
    FocusConcentration = 13,
    FocusDisruption = 14,
    FocusBrilliance = 15,
    FocusDullness = 16,
    AxeRaising = 17,
    AxeLowering = 18,
    BowRaising = 19,
    BowLowering = 20,
    CrossbowRaising = 21,
    CrossbowLowering = 22,
    DaggerRaising = 23,
    DaggerLowering = 24,
    MaceRaising = 25,
    MaceLowering = 26,
    SpearRaising = 27,
    SpearLowering = 28,
    StaffRaising = 29,
    StaffLowering = 30,
    SwordRaising = 31,
    SwordLowering = 32,
    ThrownWeaponsRaising = 33,
    ThrownWeaponsLowering = 34,
    UnarmedCombatRaising = 35,
    UnarmedCombatLowering = 36,
    MeleeDefenseRaising = 37,
    MeleeDefenseLowering = 38,
    MissileDefenseRaising = 39,
    MissileDefenseLowering = 40,
    MagicDefenseRaising = 41,
    MagicDefenseLowering = 42,
    CreatureEnchantmentRaising = 43,
    CreatureEnchantmentLowering = 44,
    ItemEnchantmentRaising = 45,
    ItemEnchantmentLowering = 46,
    LifeMagicRaising = 47,
    LifeMagicLowering = 48,
    WarMagicRaising = 49,
    WarMagicLowering = 50,
    ManaConversionRaising = 51,
    ManaConversionLowering = 52,
    ArcaneLoreRaising = 53,
    ArcaneLoreLowering = 54,
    AppraiseArmorRaising = 55,
    AppraiseArmorLowering = 56,
    AppraiseItemRaising = 57,
    AppraiseItemLowering = 58,
    AppraiseMagicItemRaising = 59,
    AppraiseMagicItemLowering = 60,
    AppraiseWeaponRaising = 61,
    AppraiseWeaponLowering = 62,
    AssessMonsterRaising = 63,
    AssessMonsterLowering = 64,
    DeceptionRaising = 65,
    DeceptionLowering = 66,
    HealingRaising = 67,
    HealingLowering = 68,
    JumpRaising = 69,
    JumpLowering = 70,
    LeadershipRaising = 71,
    LeadershipLowering = 72,
    LockpickRaising = 73,
    LockpickLowering = 74,
    LoyaltyRaising = 75,
    LoyaltyLowering = 76,
    RunRaising = 77,
    RunLowering = 78,
    HealthRaising = 79,
    HealthLowering = 80,
    StaminaRaising = 81,
    StaminaLowering = 82,
    ManaRaising = 83,
    ManaLowering = 84,
    ManaRemedy = 85,
    ManaMalediction = 86,
    HealthTransfertocaster = 87,
    HealthTransferfromcaster = 88,
    StaminaTransfertocaster = 89,
    StaminaTransferfromcaster = 90,
    ManaTransfertocaster = 91,
    ManaTransferfromcaster = 92,
    HealthAccelerating = 93,
    HealthDecelerating = 94,
    StaminaAccelerating = 95,
    StaminaDecelerating = 96,
    ManaAccelerating = 97,
    ManaDecelerating = 98,
    VitaeRaising = 99,
    VitaeLowering = 100,
    AcidProtection = 101,
    AcidVulnerability = 102,
    BludgeonProtection = 103,
    BludgeonVulnerability = 104,
    ColdProtection = 105,
    ColdVulnerability = 106,
    ElectricProtection = 107,
    ElectricVulnerability = 108,
    FireProtection = 109,
    FireVulnerability = 110,
    PierceProtection = 111,
    PierceVulnerability = 112,
    SlashProtection = 113,
    SlashVulnerability = 114,
    ArmorRaising = 115,
    ArmorLowering = 116,
    AcidMissile = 117,
    BludgeoningMissile = 118,
    ColdMissile = 119,
    ElectricMissile = 120,
    FireMissile = 121,
    PiercingMissile = 122,
    SlashingMissile = 123,
    AcidSeeker = 124,
    BludgeoningSeeker = 125,
    ColdSeeker = 126,
    ElectricSeeker = 127,
    FireSeeker = 128,
    PiercingSeeker = 129,
    SlashingSeeker = 130,
    AcidBurst = 131,
    BludgeoningBurst = 132,
    ColdBurst = 133,
    ElectricBurst = 134,
    FireBurst = 135,
    PiercingBurst = 136,
    SlashingBurst = 137,
    AcidBlast = 138,
    BludgeoningBlast = 139,
    ColdBlast = 140,
    ElectricBlast = 141,
    FireBlast = 142,
    PiercingBlast = 143,
    SlashingBlast = 144,
    AcidScatter = 145,
    BludgeoningScatter = 146,
    ColdScatter = 147,
    ElectricScatter = 148,
    FireScatter = 149,
    PiercingScatter = 150,
    SlashingScatter = 151,
    AttackModRaising = 152,
    AttackModLowering = 153,
    DamageRaising = 154,
    DamageLowering = 155,
    DefenseModRaising = 156,
    DefenseModLowering = 157,
    WeaponTimeRaising = 158,
    WeaponTimeLowering = 159,
    ArmorValueRaising = 160,
    ArmorValueLowering = 161,
    AcidResistanceRaising = 162,
    AcidResistanceLowering = 163,
    BludgeonResistanceRaising = 164,
    BludgeonResistanceLowering = 165,
    ColdResistanceRaising = 166,
    ColdResistanceLowering = 167,
    ElectricResistanceRaising = 168,
    ElectricResistanceLowering = 169,
    FireResistanceRaising = 170,
    FireResistanceLowering = 171,
    PierceResistanceRaising = 172,
    PierceResistanceLowering = 173,
    SlashResistanceRaising = 174,
    SlashResistanceLowering = 175,
    BludgeoningResistanceRaising = 176,
    BludgeoningResistanceLowering = 177,
    SlashingResistanceRaising = 178,
    SlashingResistanceLowering = 179,
    PiercingResistanceRaising = 180,
    PiercingResistanceLowering = 181,
    ElectricalResistanceRaising = 182,
    ElectricalResistanceLowering = 183,
    FrostResistanceRaising = 184,
    FrostResistanceLowering = 185,
    FlameResistanceRaising = 186,
    FlameResistanceLowering = 187,
    AcidicResistanceRaising = 188,
    AcidicResistanceLowering = 189,
    ArmorLevelRaising = 190,
    ArmorLevelLowering = 191,
    LockpickResistanceRaising = 192,
    LockpickResistanceLowering = 193,
    ManaConversionModLowering = 194,
    ManaConversionModRaising = 195,
    VisionRaising = 196,
    VisionLowering = 197,
    TransparencyRaising = 198,
    TransparencyLowering = 199,
    PortalTie = 200,
    PortalRecall = 201,
    PortalCreation = 202,
    PortalItemCreation = 203,
    Vitae = 204,
    AssessPersonRaising = 205,
    AssessPersonLowering = 206,
    AcidVolley = 207,
    BludgeoningVolley = 208,
    FrostVolley = 209,
    LightningVolley = 210,
    FlameVolley = 211,
    ForceVolley = 212,
    BladeVolley = 213,
    PortalSending = 214,
    LifestoneSending = 215,
    CookingRaising = 216,
    CookingLowering = 217,
    FletchingRaising = 218,
    FletchingLowering = 219,
    AlchemyLowering = 220,
    AlchemyRaising = 221,
    AcidRing = 222,
    BludgeoningRing = 223,
    ColdRing = 224,
    ElectricRing = 225,
    FireRing = 226,
    PiercingRing = 227,
    SlashingRing = 228,
    AcidWall = 229,
    BludgeoningWall = 230,
    ColdWall = 231,
    ElectricWall = 232,
    FireWall = 233,
    PiercingWall = 234,
    SlashingWall = 235,
    AcidStrike = 236,
    BludgeoningStrike = 237,
    ColdStrike = 238,
    ElectricStrike = 239,
    FireStrike = 240,
    PiercingStrike = 241,
    SlashingStrike = 242,
    AcidStreak = 243,
    BludgeoningStreak = 244,
    ColdStreak = 245,
    ElectricStreak = 246,
    FireStreak = 247,
    PiercingStreak = 248,
    SlashingStreak = 249,
    Dispel = 250,
    CreatureMysticRaising = 251,
    CreatureMysticLowering = 252,
    ItemMysticRaising = 253,
    ItemMysticLowering = 254,
    WarMysticRaising = 255,
    WarMysticLowering = 256,
    HealthRestoring = 257,
    HealthDepleting = 258,
    ManaRestoring = 259,
    ManaDepleting = 260,
    StrengthIncrease = 261,
    StrengthDecrease = 262,
    EnduranceIncrease = 263,
    EnduranceDecrease = 264,
    QuicknessIncrease = 265,
    QuicknessDecrease = 266,
    CoordinationIncrease = 267,
    CoordinationDecrease = 268,
    FocusIncrease = 269,
    FocusDecrease = 270,
    SelfIncrease = 271,
    SelfDecrease = 272,
    GreatVitalityRaising = 273,
    PoorVitalityLowering = 274,
    GreatVigorRaising = 275,
    PoorVigorLowering = 276,
    GreaterIntellectRaising = 277,
    LessorIntellectLowering = 278,
    LifeGiverRaising = 279,
    LifeTakerLowering = 280,
    StaminaGiverRaising = 281,
    StaminaTakerLowering = 282,
    ManaGiverRaising = 283,
    ManaTakerLowering = 284,
    AcidWardProtection = 285,
    AcidWardVulnerability = 286,
    FireWardProtection = 287,
    FireWardVulnerability = 288,
    ColdWardProtection = 289,
    ColdWardVulnerability = 290,
    ElectricWardProtection = 291,
    ElectricWardVulnerability = 292,
    LeadershipObedienceRaising = 293,
    LeadershipObedienceLowering = 294,
    MeleeDefenseShelterRaising = 295,
    MeleeDefenseShelterLowering = 296,
    MissileDefenseShelterRaising = 297,
    MissileDefenseShelterLowering = 298,
    MagicDefenseShelterRaising = 299,
    MagicDefenseShelterLowering = 300,
    HuntersAcumenRaising = 301,
    HuntersAcumenLowering = 302,
    StillWaterRaising = 303,
    StillWaterLowering = 304,
    StrengthofEarthRaising = 305,
    StrengthofEarthLowering = 306,
    TorrentRaising = 307,
    TorrentLowering = 308,
    GrowthRaising = 309,
    GrowthLowering = 310,
    CascadeAxeRaising = 311,
    CascadeAxeLowering = 312,
    CascadeDaggerRaising = 313,
    CascadeDaggerLowering = 314,
    CascadeMaceRaising = 315,
    CascadeMaceLowering = 316,
    CascadeSpearRaising = 317,
    CascadeSpearLowering = 318,
    CascadeStaffRaising = 319,
    CascadeStaffLowering = 320,
    StoneCliffsRaising = 321,
    StoneCliffsLowering = 322,
    MaxDamageRaising = 323,
    MaxDamageLowering = 324,
    BowDamageRaising = 325,
    BowDamageLowering = 326,
    BowRangeRaising = 327,
    BowRangeLowering = 328,
    ExtraDefenseModRaising = 329,
    ExtraDefenseModLowering = 330,
    ExtraBowSkillRaising = 331,
    ExtraBowSkillLowering = 332,
    ExtraAlchemySkillRaising = 333,
    ExtraAlchemySkillLowering = 334,
    ExtraArcaneLoreSkillRaising = 335,
    ExtraArcaneLoreSkillLowering = 336,
    ExtraAppraiseArmorSkillRaising = 337,
    ExtraAppraiseArmorSkillLowering = 338,
    ExtraCookingSkillRaising = 339,
    ExtraCookingSkillLowering = 340,
    ExtraCrossbowSkillRaising = 341,
    ExtraCrossbowSkillLowering = 342,
    ExtraDeceptionSkillRaising = 343,
    ExtraDeceptionSkillLowering = 344,
    ExtraLoyaltySkillRaising = 345,
    ExtraLoyaltySkillLowering = 346,
    ExtraFletchingSkillRaising = 347,
    ExtraFletchingSkillLowering = 348,
    ExtraHealingSkillRaising = 349,
    ExtraHealingSkillLowering = 350,
    ExtraMeleeDefenseSkillRaising = 351,
    ExtraMeleeDefenseSkillLowering = 352,
    ExtraAppraiseItemSkillRaising = 353,
    ExtraAppraiseItemSkillLowering = 354,
    ExtraJumpingSkillRaising = 355,
    ExtraJumpingSkillLowering = 356,
    ExtraLifeMagicSkillRaising = 357,
    ExtraLifeMagicSkillLowering = 358,
    ExtraLockpickSkillRaising = 359,
    ExtraLockpickSkillLowering = 360,
    ExtraAppraiseMagicItemSkillRaising = 361,
    ExtraAppraiseMagicItemSkillLowering = 362,
    ExtraManaConversionSkillRaising = 363,
    ExtraManaConversionSkillLowering = 364,
    ExtraAssessCreatureSkillRaising = 365,
    ExtraAssessCreatureSkillLowering = 366,
    ExtraAssessPersonSkillRaising = 367,
    ExtraAssessPersonSkillLowering = 368,
    ExtraRunSkillRaising = 369,
    ExtraRunSkillLowering = 370,
    ExtraSwordSkillRaising = 371,
    ExtraSwordSkillLowering = 372,
    ExtraThrownWeaponsSkillRaising = 373,
    ExtraThrownWeaponsSkillLowering = 374,
    ExtraUnarmedCombatSkillRaising = 375,
    ExtraUnarmedCombatSkillLowering = 376,
    ExtraAppraiseWeaponSkillRaising = 377,
    ExtraAppraiseWeaponSkillLowering = 378,
    ArmorIncrease = 379,
    ArmorDecrease = 380,
    ExtraAcidResistanceRaising = 381,
    ExtraAcidResistanceLowering = 382,
    ExtraBludgeonResistanceRaising = 383,
    ExtraBludgeonResistanceLowering = 384,
    ExtraFireResistanceRaising = 385,
    ExtraFireResistanceLowering = 386,
    ExtraColdResistanceRaising = 387,
    ExtraColdResistanceLowering = 388,
    ExtraAttackModRaising = 389,
    ExtraAttackModLowering = 390,
    ExtraArmorValueRaising = 391,
    ExtraArmorValueLowering = 392,
    ExtraPierceResistanceRaising = 393,
    ExtraPierceResistanceLowering = 394,
    ExtraSlashResistanceRaising = 395,
    ExtraSlashResistanceLowering = 396,
    ExtraElectricResistanceRaising = 397,
    ExtraElectricResistanceLowering = 398,
    ExtraWeaponTimeRaising = 399,
    ExtraWeaponTimeLowering = 400,
    BludgeonWardProtection = 401,
    BludgeonWardVulnerability = 402,
    SlashWardProtection = 403,
    SlashWardVulnerability = 404,
    PierceWardProtection = 405,
    PierceWardVulnerability = 406,
    StaminaRestoring = 407,
    StaminaDepleting = 408,
    Fireworks = 409,
    HealthDivide = 410,
    StaminaDivide = 411,
    ManaDivide = 412,
    CoordinationIncrease2 = 413,
    StrengthIncrease2 = 414,
    FocusIncrease2 = 415,
    EnduranceIncrease2 = 416,
    SelfIncrease2 = 417,
    MeleeDefenseMultiply = 418,
    MissileDefenseMultiply = 419,
    MagicDefenseMultiply = 420,
    AttributesDecrease = 421,
    LifeGiverRaising2 = 422,
    ItemEnchantmentRaising2 = 423,
    SkillsDecrease = 424,
    ExtraManaConversionBonus = 425,
    WarMysticRaising2 = 426,
    WarMysticLowering2 = 427,
    MagicDefenseShelterRaising2 = 428,
    ExtraLifeMagicSkillRaising2 = 429,
    CreatureMysticRaising2 = 430,
    ItemMysticRaising2 = 431,
    ManaRaising2 = 432,
    SelfRaising2 = 433,
    CreatureEnchantmentRaising2 = 434,
    SalvagingRaising = 435,
    ExtraSalvagingRaising = 436,
    ExtraSalvagingRaising2 = 437,
    CascadeAxeRaising2 = 438,
    ExtraBowSkillRaising2 = 439,
    ExtraThrownWeaponsSkillRaising2 = 440,
    ExtraCrossbowSkillRaising2 = 441,
    CascadeDaggerRaising2 = 442,
    CascadeMaceRaising2 = 443,
    ExtraUnarmedCombatSkillRaising2 = 444,
    CascadeSpearRaising2 = 445,
    CascadeStaffRaising2 = 446,
    ExtraSwordSkillRaising2 = 447,
    AcidProtectionRare = 448,
    AcidResistanceRaisingRare = 449,
    AlchemyRaisingRare = 450,
    AppraisalResistanceLoweringRare = 451,
    AppraiseArmorRaisingRare = 452,
    AppraiseItemRaisingRare = 453,
    AppraiseMagicItemRaisingRare = 454,
    AppraiseWeaponRaisingRare = 455,
    ArcaneLoreRaisingRare = 456,
    ArmorRaisingRare = 457,
    ArmorValueRaisingRare = 458,
    AssessMonsterRaisingRare = 459,
    AssessPersonRaisingRare = 460,
    AttackModRaisingRare = 461,
    AxeRaisingRare = 462,
    BludgeonProtectionRare = 463,
    BludgeonResistanceRaisingRare = 464,
    BowRaisingRare = 465,
    ColdProtectionRare = 466,
    ColdResistanceRaisingRare = 467,
    CookingRaisingRare = 468,
    CoordinationRaisingRare = 469,
    CreatureEnchantmentRaisingRare = 470,
    CrossbowRaisingRare = 471,
    DaggerRaisingRare = 472,
    DamageRaisingRare = 473,
    DeceptionRaisingRare = 474,
    DefenseModRaisingRare = 475,
    ElectricProtectionRare = 476,
    ElectricResistanceRaisingRare = 477,
    EnduranceRaisingRare = 478,
    FireProtectionRare = 479,
    FireResistanceRaisingRare = 480,
    FletchingRaisingRare = 481,
    FocusRaisingRare = 482,
    HealingRaisingRare = 483,
    HealthAcceleratingRare = 484,
    ItemEnchantmentRaisingRare = 485,
    JumpRaisingRare = 486,
    LeadershipRaisingRare = 487,
    LifeMagicRaisingRare = 488,
    LockpickRaisingRare = 489,
    LoyaltyRaisingRare = 490,
    MaceRaisingRare = 491,
    MagicDefenseRaisingRare = 492,
    ManaAcceleratingRare = 493,
    ManaConversionRaisingRare = 494,
    MeleeDefenseRaisingRare = 495,
    MissileDefenseRaisingRare = 496,
    PierceProtectionRare = 497,
    PierceResistanceRaisingRare = 498,
    QuicknessRaisingRare = 499,
    RunRaisingRare = 500,
    SelfRaisingRare = 501,
    SlashProtectionRare = 502,
    SlashResistanceRaisingRare = 503,
    SpearRaisingRare = 504,
    StaffRaisingRare = 505,
    StaminaAcceleratingRare = 506,
    StrengthRaisingRare = 507,
    SwordRaisingRare = 508,
    ThrownWeaponsRaisingRare = 509,
    UnarmedCombatRaisingRare = 510,
    WarMagicRaisingRare = 511,
    WeaponTimeRaisingRare = 512,
    ArmorIncreaseInkyArmor = 513,
    MagicDefenseShelterRaisingFiun = 514,
    ExtraRunSkillRaisingFiun = 515,
    ExtraManaConversionSkillRaisingFiun = 516,
    AttributesIncreaseCantrip1 = 517,
    ExtraMeleeDefenseSkillRaising2 = 518,
    ACTDPurchaseRewardSpell = 519,
    ACTDPurchaseRewardSpellHealth = 520,
    SaltAshAttackModRaising = 521,
    QuicknessIncrease2 = 522,
    ExtraAlchemySkillRaising2 = 523,
    ExtraCookingSkillRaising2 = 524,
    ExtraFletchingSkillRaising2 = 525,
    ExtraLockpickSkillRaising2 = 526,
    MucorManaWell = 527,
    StaminaRestoring2 = 528,
    AllegianceRaising = 529,
    HealthDoT = 530,
    HealthDoTSecondary = 531,
    HealthDoTTertiary = 532,
    HealthHoT = 533,
    HealthHoTSecondary = 534,
    HealthHoTTertiary = 535,
    HealthDivideSecondary = 536,
    HealthDivideTertiary = 537,
    SetSwordRaising = 538,
    SetAxeRaising = 539,
    SetDaggerRaising = 540,
    SetMaceRaising = 541,
    SetSpearRaising = 542,
    SetStaffRaising = 543,
    SetUnarmedRaising = 544,
    SetBowRaising = 545,
    SetCrossbowRaising = 546,
    SetThrownRaising = 547,
    SetItemEnchantmentRaising = 548,
    SetCreatureEnchantmentRaising = 549,
    SetWarMagicRaising = 550,
    SetLifeMagicRaising = 551,
    SetMeleeDefenseRaising = 552,
    SetMissileDefenseRaising = 553,
    SetMagicDefenseRaising = 554,
    SetStaminaAccelerating = 555,
    SetCookingRaising = 556,
    SetFletchingRaising = 557,
    SetLockpickRaising = 558,
    SetAlchemyRaising = 559,
    SetSalvagingRaising = 560,
    SetArmorExpertiseRaising = 561,
    SetWeaponExpertiseRaising = 562,
    SetItemTinkeringRaising = 563,
    SetMagicItemExpertiseRaising = 564,
    SetLoyaltyRaising = 565,
    SetStrengthRaising = 566,
    SetEnduranceRaising = 567,
    SetCoordinationRaising = 568,
    SetQuicknessRaising = 569,
    SetFocusRaising = 570,
    SetWillpowerRaising = 571,
    SetHealthRaising = 572,
    SetStaminaRaising = 573,
    SetManaRaising = 574,
    SetSprintRaising = 575,
    SetJumpingRaising = 576,
    SetSlashResistanceRaising = 577,
    SetBludgeonResistanceRaising = 578,
    SetPierceResistanceRaising = 579,
    SetFlameResistanceRaising = 580,
    SetAcidResistanceRaising = 581,
    SetFrostResistanceRaising = 582,
    SetLightningResistanceRaising = 583,
    CraftingLockPickRaising = 584,
    CraftingFletchingRaising = 585,
    CraftingCookingRaising = 586,
    CraftingAlchemyRaising = 587,
    CraftingArmorTinkeringRaising = 588,
    CraftingWeaponTinkeringRaising = 589,
    CraftingMagicTinkeringRaising = 590,
    CraftingItemTinkeringRaising = 591,
    SkillPercentAlchemyRaising = 592,
    TwoHandedRaising = 593,
    TwoHandedLowering = 594,
    ExtraTwoHandedSkillRaising = 595,
    ExtraTwoHandedSkillLowering = 596,
    ExtraTwoHandedSkillRaising2 = 597,
    TwoHandedRaisingRare = 598,
    SetTwoHandedRaising = 599,
    GearCraftRaising = 600,
    GearCraftLowering = 601,
    ExtraGearCraftSkillRaising = 602,
    ExtraGearCraftSkillLowering = 603,
    ExtraGearCraftSkillRaising2 = 604,
    GearCraftRaisingRare = 605,
    SetGearCraftRaising = 606,
    LoyaltyManaRaising = 607,
    LoyaltyStaminaRaising = 608,
    LeadershipHealthRaising = 609,
    TrinketDamageRaising = 610,
    TrinketDamageLowering = 611,
    TrinketHealthRaising = 612,
    TrinketStaminaRaising = 613,
    TrinketManaRaising = 614,
    TrinketXPRaising = 615,
    DeceptionArcaneLoreRaising = 616,
    HealOverTimeRaising = 617,
    DamageOverTimeRaising = 618,
    HealingResistRatingRaising = 619,
    AetheriaDamageRatingRaising = 620,
    AetheriaDamageReductionRaising = 621,
    AetheriaHealthRaising = 623,
    AetheriaStaminaRaising = 624,
    AetheriaManaRaising = 625,
    AetheriaCriticalDamageRaising = 626,
    AetheriaHealingAmplificationRaising = 627,
    AetheriaProcDamageRatingRaising = 628,
    AetheriaProcDamageReductionRaising = 629,
    AetheriaProcHealthOverTimeRaising = 630,
    AetheriaProcDamageOverTimeRaising = 631,
    AetheriaProcHealingReductionRaising = 632,
    RareDamageRatingRaising = 633,
    RareDamageReductionRatingRaising = 634,
    AetheriaEnduranceRaising = 635,
    NetherDamageOverTimeRaising = 636,
    NetherDamageOverTimeRaising2 = 637,
    NetherDamageOverTimeRaising3 = 638,
    NetherStreak = 639,
    NetherMissile = 640,
    NetherRing = 641,
    NetherDamageRatingLowering = 642,
    NetherDamageHealingReductionRaising = 643,
    VoidMagicLowering = 644,
    VoidMagicRaising = 645,
    VoidMysticRaising = 646,
    SetVoidMagicRaising = 647,
    VoidMagicRaisingRare = 648,
    VoidMysticRaising2 = 649,
    LuminanceDamageRatingRaising = 650,
    LuminanceDamageReductionRaising = 651,
    LuminanceHealthRaising = 652,
    AetheriaCriticalReductionRaising = 653,
    ExtraMissileDefenseSkillRaising = 654,
    ExtraMissileDefenseSkillLowering = 655,
    ExtraMissileDefenseSkillRaising2 = 656,
    AetheriaHealthResistanceRaising = 657,
    AetheriaDotResistanceRaising = 658,
    CloakSkillRaising = 659,
    CloakAllSkillRaising = 660,
    CloakMagicDefenseLowering = 661,
    CloakMeleeDefenseLowering = 662,
    CloakMissileDefenseLowering = 663,
    DirtyFightingLowering = 664,
    DirtyFightingRaising = 665,
    ExtraDirtyFightingRaising = 666,
    DualWieldLowering = 667,
    DualWieldRaising = 668,
    ExtraDualWieldRaising = 669,
    RecklessnessLowering = 670,
    RecklessnessRaising = 671,
    ExtraRecklessnessRaising = 672,
    ShieldLowering = 673,
    ShieldRaising = 674,
    ExtraShieldRaising = 675,
    SneakAttackLowering = 676,
    SneakAttackRaising = 677,
    ExtraSneakAttackRaising = 678,
    RareDirtyFightingRaising = 679,
    RareDualWieldRaising = 680,
    RareRecklessnessRaising = 681,
    RareShieldRaising = 682,
    RareSneakAttackRaising = 683,
    DFAttackSkillDebuff = 684,
    DFBleedDamage = 685,
    DFDefenseSkillDebuff = 686,
    DFHealingDebuff = 687,
    SetDirtyFightingRaising = 688,
    SetDualWieldRaising = 689,
    SetRecklessnessRaising = 690,
    SetShieldRaising = 691,
    SetSneakAttackRaising = 692,
    LifeGiverMhoire = 693,
    RareDamageRatingRaising2 = 694,
    SpellDamageRaising = 695,
    SummoningRaising = 696,
    SummoningLowering = 697,
    ExtraSummoningSkillRaising = 698,
    SetSummoningRaising = 699,
    ParagonEnduranceRaising = 704,
    ParagonManaRaising = 705,
    ParagonStaminaRaising = 706,
    ParagonDirtyFightingRaising = 707,
    ParagonDualWieldRaising = 708,
    ParagonRecklessnessRaising = 709,
    ParagonSneakAttackRaising = 710,
    ParagonDamageRatingRaising = 711,
    ParagonDamageReductionRatingRaising = 712,
    ParagonCriticalDamageRatingRaising = 713,
    ParagonCriticalDamageReductionRatingRaising = 714,
    ParagonAxeRaising = 715,
    ParagonDaggerRaising = 716,
    ParagonSwordRaising = 717,
    ParagonWarMagicRaising = 718,
    ParagonLifeMagicRaising = 719,
    ParagonVoidMagicRaising = 720,
    ParagonBowRaising = 721,
    ParagonStrengthRaising = 722,
    ParagonCoordinationRaising = 723,
    ParagonQuicknessRaising = 724,
    ParagonFocusRaising = 725,
    ParagonWillpowerRaising = 726,
    ParagonTwoHandedRaising = 727,
    GauntletDamageReductionRatingRaising = 728,
    GauntletDamageRatingRaising = 729,
    GauntletHealingRatingRaising = 730,
    GauntletVitalityRaising = 731,
    GauntletCriticalDamageRatingRaising = 732,
    GauntletCriticalDamageReductionRatingRaising = 733
}
/*Heritage of a player*/
enum HeritageGroup {
    Invalid = 0,
    Aluvian = 1,
    Gharundim = 2,
    Sho = 3,
    Viamontian = 4,
    Shadowbound = 5,
    Gearknight = 6,
    Tumerok = 7,
    Lugian = 8,
    Empyrean = 9,
    Penumbraen = 10,
    Undead = 11,
    Olthoi = 12,
    OlthoiAcid = 13
}
/*the type of highlight (outline) applied to the object's icon*/
enum IconHighlight {
    Invalid = 0,
    Magical = 1,
    Poisoned = 2,
    BoostHealth = 4,
    BoostMana = 8,
    BoostStamina = 16,
    Fire = 32,
    Lightning = 64,
    Frost = 128,
    Acid = 256,
    Bludgeoning = 512,
    Slashing = 1024,
    Piercing = 2048,
    Nether = 4096
}
enum CombatUse {
    None = 0,
    Melee = 1,
    Missile = 2,
    Ammo = 3,
    Shield = 4,
    TwoHanded = 5
}
/*the type of wieldable item this is*/
enum WieldType {
    Invalid = 0,
    MeleeWeapon = 1,
    Armor = 2,
    Clothing = 4,
    Jewelry = 8
}
/*Chat channel type, for turbine chat*/
enum ChatType {
    Undef = 0,
    Allegiance = 1,
    General = 2,
    Trade = 3,
    LFG = 4,
    Roleplay = 5,
    Society = 6,
    SocietyCelHan = 7,
    SocietyEldWeb = 8,
    SocietyRadBlo = 9,
    Olthoi = 10
}
/*The ChatDisplayMask identifies that types of chat that are displayed in each chat window. */
enum ChatDisplayMask {
    /*Gameplay (main chat window only)*/
    Gameplay = 59842593,
    /*Mandatory (main chat window only, cannot be disabled)*/
    Mandatory = 49922,
    AreaChat = 4100,
    Tells = 24,
    Combat = 6291520,
    Magic = 131200,
    Allegiance = 265216,
    Fellowship = 524288,
    Errors = 67108864,
    TradeChannel = 268435456,
    LFGChannel = 536870912,
    RoleplayChannel = 1073741824
}
enum EnchantmentMask {
    Multiplicative = 59842593,
    Additive = 59842593,
    Vitae = 59842593,
    Cooldown = 59842593
}
enum EnchantmentTypeFlags {
    Undef = 0,
    Attribute = 1,
    SecondAtt = 2,
    Int = 4,
    Float = 8,
    Skill = 16,
    BodyDamageValue = 32,
    BodyDamageVariance = 64,
    BodyArmorValue = 128,
    SingleStat = 4096,
    MultipleStat = 8192,
    Multiplicative = 16384,
    Additive = 32768,
    AttackSkills = 65536,
    DefenseSkills = 131072,
    MultiplicativeDegrade = 1048576,
    Additive_Degrade = 2097152,
    Vitae = 8388608,
    Cooldown = 16777216,
    Beneficial = 33554432,
    StatTypes = 255
}
enum ParentLocation {
    None = 0,
    RightHand = 1,
    LeftHand = 2,
    Shield = 3,
    Belt = 4,
    Quiver = 5,
    Hearldry = 6,
    Mouth = 7,
    LeftWeapon = 8,
    LeftUnarmed = 9
}
enum Placement {
    Default = 0,
    RightHandCombat = 1,
    RightHandNonCombat = 2,
    LeftHand = 3,
    Belt = 4,
    Quiver = 5,
    Shield = 6,
    LeftWeapon = 7,
    LeftUnarmed = 8,
    SpecialCrowssbowBolt = 51,
    MissileFlight = 52,
    Resting = 101,
    Other = 102,
    Hook = 103,
    Random1 = 121,
    Random2 = 122,
    Random3 = 123,
    Random4 = 124,
    Random5 = 125,
    Random6 = 126,
    Random7 = 127,
    Random8 = 128,
    Random9 = 129,
    Random10 = 130,
    XXXUnknownA = 10,
    XXXUnknownF = 15,
    XXXUnknown14 = 20,
    XXXUnknown1E = 30,
    XXXUnknown20 = 32,
    XXXUnknown3C = 60,
    XXXUnknown69 = 105,
    XXXUnknown6A = 106,
    XXXUnknown63 = 99,
    XXXUnknown68 = 104,
    XXXUnknown78 = 120,
    XXXUnknown84 = 132,
    XXXUnknownF0 = 240,
    XXXUnknown3F2 = 1010
}
interface bool {
}
interface byte {
}
interface short {
}
interface ushort {
}
interface int {
}
interface uint {
}
interface long {
}
interface ulong {
}
interface float {
}
interface double {
}
interface string {
}
interface WString {
}
interface WORD {
}
interface DWORD {
}
interface PackedWORD {
}
interface PackedDWORD {
}
interface ObjectId {
}
interface LandcellId {
}
interface SpellId {
}
interface DataId {
}
/*Full spell Id combining the spell id with the spell layer.*/
interface LayeredSpellId {
    /*Id of the spell*/
    Id: string;
    /*Layer of the spell, seperating multiple instances of the same spell*/
    Layer: string;
}
/*List which is packable for network*/
interface PackableList {
    /*Number of items in the list*/
    Count: string;
}
/*HashTable which is packable for network*/
interface PackableHashTable {
    /*number of items in the table*/
    Count: string;
    /*max size of the table*/
    MaxSize: string;
}
/*HashTable which is packable for network*/
interface PHashTable {
    PackedSize: string;
}
interface Vector3 {
    X: string;
    Y: string;
    Z: string;
}
interface Quaternion {
    W: string;
    X: string;
    Y: string;
    Z: string;
}
/*Landcell location, without orientation*/
interface Origin {
    /*the landcell in which the object is located*/
    Landcell: string;
    /*the location in the landcell for the object*/
    Location: string;
}
/*Landcell location, including orientation*/
interface Position {
    /*the landcell in which the object is located*/
    Landcell: string;
    /*the location and orientation in the landcell*/
    Frame: string;
}
/*A the location and orientation of an object within a landcell*/
interface Frame {
    /*the location in a landcell in which the object is located*/
    Origin: string;
    /*a quaternion describing the object's orientation*/
    Orientation: string;
}
/*Optional header data when PacketHeaderFlags includes ServerSwitch*/
interface ServerSwitchHeader {
    Sequence: string;
    Type: string;
}
/*Optional header data when PacketHeaderFlags includes CICMDCommand*/
interface CICMDCommandHeader {
    Command: string;
    Parameter: string;
}
/*Optional header data when PacketHeaderFlags includes Flow*/
interface FlowHeader {
    Bytes: string;
    Interval: string;
}
/*Optional header data when PacketHeaderFlags includes LogonServerAddr*/
interface SocketAddress {
    Family: string;
    Port: string;
    Address: string;
    Empty: string;
}
/*Optional header data when PacketHeaderFlags includes LoginRequest*/
interface LoginRequestHeader {
    ClientVersion: string;
    Length: string;
    AuthType: string;
    Flags: string;
    Sequence: string;
    /*The name of the account that is authenticating.*/
    Account: string;
    /*The name of the account to login as (admin only).*/
    AccountToLoginAs: string;
    /*The password for this account, when using NetaAuthType.AccountPassword*/
    Password: string;
    /*The GlsTicket for this account, when using NetaAuthType.GlsTicket*/
    GlsTicket: string;
}
/*Optional header data when PacketHeaderFlags includes Referral*/
interface ReferralHeader {
    Cookie: string;
    Address: string;
    IdServer: string;
    Unknown: string;
}
/*Optional header data when PacketHeaderFlags includes ConnectRequest*/
interface ConnectRequestHeader {
    ServerTime: string;
    Cookie: string;
    NetID: string;
    OutgoingSeed: string;
    IncomingSeed: string;
    Unknown: string;
}
interface NetError {
    StringId: string;
    TableId: string;
}
interface EchoResponseHeader {
    LocalTime: string;
    HoldingTime: string;
}
/*A collection of property tables.*/
interface ACBaseQualities {
    /*determines which property types appear in the message*/
    Flags: string;
    /*Expect it always should be 0xA*/
    WeenieType: string;
    IntProperties: string;
    Int64Properties: string;
    BoolProperties: string;
    FloatProperties: string;
    StringProperties: string;
    DataProperties: string;
    InstanceProperties: string;
    PositionProperties: string;
}
/*The ACQualities structure contains character property lists.*/
interface ACQualities {
    /*determines which property vector types appear in the message*/
    Flags: string;
    /*seems to indicate this object has health attribute*/
    HasHealth: string;
    /*The character attributes*/
    Attributes: string;
    Skills: string;
    Body: string;
    /*Spells in the characters spellbook*/
    SpellBook: string;
    /*The enchantments active on the character*/
    Enchantments: string;
    /*Some kind of event filter*/
    EventFilter: string;
    Emotes: string;
    CreationProfile: string;
    PageData: string;
    Generators: string;
    GeneratorRegistry: string;
    GeneratorQueue: string;
}
/*The AttributeCache structure contains information about a character attributes.*/
interface AttributeCache {
    /*The attributes included in the character description - this is always 0x1FF*/
    Flags: string;
    /*strength attribute information*/
    Strength: string;
    /*endurance attribute information*/
    Endurance: string;
    /*quickness attribute information*/
    Quickness: string;
    /*coordination attribute information*/
    Coordination: string;
    /*focus attribute information*/
    Focus: string;
    /*self attribute information*/
    Self: string;
    /*health vital information*/
    Health: string;
    /*stamina vital information*/
    Stamina: string;
    /*mana vital information*/
    Mana: string;
}
/*The Attribute structure contains information about a character attribute.*/
interface AttributeInfo {
    /*points raised*/
    PointsRaised: string;
    /*innate points*/
    InnatePoints: string;
    /*XP spent on this attribute*/
    ExperienceSpent: string;
}
/*The SecondaryAttribute structure contains information about a character vital.*/
interface SecondaryAttributeInfo {
    /*secondary attribute's data*/
    Attribute: string;
    /*current value of the vital*/
    Current: string;
}
/*The Skill structure contains information about a character skill.*/
interface Skill {
    /*points raised*/
    PointsRaised: string;
    /*If this is not 0, it appears to trigger the initLevel to be treated as extra XP applied to the skill*/
    AdjustPP: string;
    /*skill state*/
    TrainingLevel: string;
    /*XP spent on this skill*/
    ExperienceSpent: string;
    /*starting point for advancement of the skill (eg bonus points)*/
    InnatePoints: string;
    /*last use difficulty*/
    ResistanceOfLastCheck: string;
    /*time skill was last used*/
    LastUsedTime: string;
}
/*Contains body part table*/
interface Body {
    BodyParts: string;
}
/*Information on individual body parts. (Needs to be confirmed if this was used in prod)*/
interface BodyPart {
    HasBPSD: string;
    DamageType: string;
    DamageVal: string;
    DamageVar: string;
    /*Armor info*/
    ArmorCache: string;
    BH: string;
    BPSD: string;
}
/*Information on armor levels*/
interface ArmorCache {
    BaseArmor: string;
    ArmorVsSlash: string;
    ArmorVsPierce: string;
    ArmorVsBludgeon: string;
    ArmorVsCold: string;
    ArmorVsFire: string;
    ArmorVsAcid: string;
    ArmorVsElectric: string;
    ArmorVsNether: string;
}
interface BodyPartSelectionData {
    HLF: string;
    MLF: string;
    LLF: string;
    HRF: string;
    MRF: string;
    LRF: string;
    HLB: string;
    MLB: string;
    LLB: string;
    HRB: string;
    MRB: string;
    LRB: string;
}
/*Contains information related to the spell in your spellbook*/
interface SpellBookPage {
    /*Final value has 2.0 subtracted if network value > 2.0.  Believe this is the charge of the spell which was unused later*/
    CastingLikelihood: string;
    /*Client skips this value*/
    Unknown: string;
    /*Replaces castingLikelihood*/
    CastingLikelihood2: string;
}
/*Contains information related to the spells in effect on the character*/
interface EnchantmentRegistry {
    /*Flags that determine what data is contained in the EnchantmentRegistry*/
    Flags: string;
    /*Life spells active on the player*/
    LifeSpells: string;
    /*Creature spells active on the player*/
    CreatureSpells: string;
    /*Vitae Penalty.*/
    Vitae: string;
    /*Cooldown spells active on the player*/
    Cooldowns: string;
}
/*The Enchantment structure describes an active enchantment.*/
interface Enchantment {
    /*the spell Id of the enchantment*/
    Id: string;
    /*Value greater or equal to 1 means we read EquipmentSet*/
    HasEquipmentSet: string;
    /*the family of related spells this enchantment belongs to*/
    SpellCategory: string;
    /*the difficulty of the spell*/
    PowerLevel: string;
    /*the amount of time this enchantment has been active*/
    StartTime: string;
    /*the duration of the spell*/
    Duration: string;
    /*the object Id of the creature or item that cast this enchantment*/
    CasterId: string;
    /*unknown*/
    DegradeModifier: string;
    /*unknown*/
    DegradeLimit: string;
    /*the time when this enchantment was cast*/
    LastTimeDegraded: string;
    /*Stat modification information*/
    StatMod: string;
    /*Related to armor sets somehow?*/
    EquipmentSet: string;
}
/*Information on stat modification*/
interface StatMod {
    /*flags that indicate the type of effect the spell has*/
    Type: string;
    /*along with flags, indicates which attribute is affected by the spell*/
    Key: string;
    /*the effect value/amount*/
    Value: string;
}
/*Contains a list of events to filter? Unknown what this does currently.*/
interface EventFilter {
    /*List of events*/
    Events: string;
}
/*Contains a list of emotes for NPCs? Unknown what this does currently.*/
interface EmoteTable {
    /*Key may be an EmoteCategory?*/
    Emotes: string;
}
interface EmoteSetList {
    /*List of emote sets*/
    Emotes: string;
}
interface EmoteSet {
    Category: string;
    Probability: string;
    ClassId: string;
    Style: string;
    Substyle: string;
    Quest: string;
    VendorType: string;
    MinHealth: string;
    MaxHealth: string;
    /*List of emotes*/
    Emotes: string;
}
interface Emote {
    Type: string;
    Delay: string;
    Extent: string;
    Message: string;
    Message: string;
    Amount: string;
    Stat: string;
    Amount: string;
    Stat: string;
    Stat: string;
    Percent: string;
    Message: string;
    Min: string;
    Max: string;
    Amount64: string;
    HeroXP64: string;
    Amount64: string;
    Amount: string;
    SpellId: string;
    CProfile: string;
    msg: string;
    CProfile: string;
    /*Over 8 is invalid*/
    WealthRating: string;
    TreasureClass: string;
    /*Valid values are 0 to 3 */
    TreasureType: string;
    Motion: string;
    Frame: string;
    PhysicsScript: string;
    Sound: string;
    Amount: string;
    Stat: string;
    Stat: string;
    Amount: string;
    Message: string;
    Stat: string;
    Message: string;
    TestString: string;
    Stat: string;
    Message: string;
    Min: string;
    Max: string;
    Stat: string;
    Message: string;
    Min64: string;
    Max64: string;
    Stat: string;
    Message: string;
    FMin: string;
    FMax: string;
    Stat: string;
    Percent: string;
    Min64: string;
    Max64: string;
    Stat: string;
    Percent: string;
    Min: string;
    Max: string;
    Display: string;
    Position: string;
}
/*Set information about an item for creation*/
interface CreationProfile {
    WeenieClassId: string;
    Palette: string;
    Shade: string;
    Destination: string;
    StackSize: string;
    TryToBond: string;
}
/*List of pages in a book*/
interface PageDataList {
    MaxNumPages: string;
    MaxNumCharsPerPage: string;
    /*List of pages*/
    Pages: string;
}
/*Data for an individual page*/
interface PageData {
    AuthorId: string;
    AuthorName: string;
    AuthorAccount: string;
    /*if HIWORD is not 0xFFFF, this is textIncluded. For our purpose this should always be 0xFFFF0002*/
    Version: string;
    TextIncluded: string;
    IgnoreAuthor: string;
    PageText: string;
}
/*Blob fragment data used to contruct message data. These can be spread across multiple packets*/
interface BlobFragments {
    /*Fragment Sequence / Order*/
    Sequence: string;
    /*The id of this fragment*/
    Id: string;
    /*The total number of blob fragments used to make up the message data*/
    Count: string;
    /*The total size of data in this message, including this header data*/
    Size: string;
    /*The zero-based index of Count total fragment bodies that will be used to contruct the message data*/
    Index: string;
    Group: string;
}
interface GeneratorTable {
    /*List of generator profiles*/
    Generators: string;
}
interface GeneratorProfile {
    Probability: string;
    TypeId: string;
    Delay: string;
    InitCreate: string;
    MaxNum: string;
    WhenCreate: string;
    WhereCreate: string;
    StackSize: string;
    Ptid: string;
    Shade: string;
    PosVal: string;
    Slot: string;
}
interface GeneratorRegistry {
    Registry: string;
}
interface GeneratorRegistryNode {
    WcidOrType: string;
    Ts: string;
    TreasureType: string;
    Slot: string;
    Checkpointed: string;
    Shop: string;
    Amount: string;
}
/*Set of inventory items*/
interface GeneratorQueue {
    Queue: string;
}
interface GeneratorQueueNode {
    Slot: string;
    When: string;
}
interface WindowProperty {
    Key_a: string;
    Unknown_c: string;
    TitleSource: string;
    StringId: string;
    FileId: string;
    Value_a: string;
    Unknown_1b: string;
    Unknown_1c: string;
    Unknown_d: string;
    Value_d: string;
    Unknown_e: string;
    Value_e: string;
    Unknown_f: string;
    Value_f: string;
    Unknown_h: string;
    Value_h: string;
    Unknown_i: string;
    Value_i: string;
    Unknown_j: string;
    Value_j: string;
}
interface WindowOption {
    Type_a: string;
    Unknown_b: string;
    PropertyCount: string;
}
interface OptionProperty {
    Type: string;
    Unknown_a: string;
    WindowOptions: string;
    unknown_k: string;
    activeOpacity: string;
    unknown_l: string;
    inactiveOpacity: string;
}
interface GameplayOptions {
    /*The size in bytes of the GameplayOptions payload that follows*/
    Size: string;
    Unknown200_2: string;
    OptionPropertyCount: string;
}
/*The PlayerModule structure contains character options.*/
interface PlayerModule {
    Flags: string;
    Options: string;
    /*List of short cuts.*/
    Shortcuts: string;
    Tab1Spells: string;
    Tab2Spells: string;
    Tab3Spells: string;
    Tab4Spells: string;
    Tab5Spells: string;
    Tab6Spells: string;
    Tab7Spells: string;
    Tab8Spells: string;
    /*A dictionary of comps to fill with the key being the component weenie class id, and the value being the fill number*/
    FillComps: string;
    SpellBookFilters: string;
    OptionFlags: string;
    Unknown100_1: string;
    OptionStrings: string;
    GameplayOptions: string;
}
/*Set of shortcuts*/
interface ShortCutManager {
    /*List of short cuts.*/
    Shortcuts: string;
}
/*Shortcut*/
interface ShortCutData {
    /*Position*/
    Index: string;
    /*Object Id*/
    ObjectId: string;
    /*May not have been used in prod?  Maybe a remnet of before spell tabs?  I don't think you could put spells in shortcut spot...*/
    SpellId: string;
}
/*List of spells in spell tab*/
interface SpellTab {
    /*List of spells on tab.*/
    Spells: string;
}
/*Set of inventory items*/
interface ContentProfile {
    ObjectId: string;
    /*Whether or not this object is a container.*/
    ContainerType: string;
}
/*Set of inventory items*/
interface InventoryPlacement {
    ObjectId: string;
    Location: string;
    Priority: string;
}
/*Allegience information*/
interface AllegianceProfile {
    /*The number of allegiance members.*/
    TotalMembers: string;
    /*Your personal number of followers.*/
    TotalVassals: string;
    Hierarchy: string;
}
/*Allegience record*/
interface AllegianceRecord {
    /*The Object Id for the parent character to this character.  Used by the client to decide how to build the display in the Allegiance tab. 1 is the monarch.*/
    TreeParent: string;
    AllegianceData: string;
}
/*Allegience hierarchy information*/
interface AllegianceHierarchy {
    /*Number of character allegiance records.*/
    RecordCount: string;
    /*Defines which properties are available. 0x0B seems to be the latest version which includes all properties.*/
    OldVersion: string;
    /*Taking a guess on these values.  Guessing they may only be valid on Monarchs.*/
    Officers: string;
    /*Believe these may pass in the current officer title list.  Guessing they may only be valid on Monarchs.*/
    OfficerTitles: string;
    /*May only be valid for Monarchs/Speakers?*/
    MonarchBroadcastTime: string;
    /*May only be valid for Monarchs/Speakers?*/
    MonarchBroadcastsToday: string;
    /*May only be valid for Monarchs/Speakers?*/
    SpokesBroadcastTime: string;
    /*May only be valid for Monarchs/Speakers?*/
    SpokesBroadcastsToday: string;
    /*Text for current motd. May only be valid for Monarchs/Speakers?*/
    Motd: string;
    /*Who set the current motd. May only be valid for Monarchs/Speakers?*/
    MotdSetBy: string;
    /*allegiance chat channel number*/
    ChatRoomId: string;
    /*Location of monarchy bindpoint*/
    Bindpoint: string;
    /*The name of the allegiance.*/
    AllegianceName: string;
    /*Time name was last set.  Seems to count upward for some reason.*/
    NameLastSetTime: string;
    /*Whether allegiance is locked.*/
    IsLocked: string;
    ApprovedVassal: string;
    /*Monarch's data*/
    MonarchData: string;
}
/*Set of allegiance data for a specific player*/
interface AllegianceData {
    /*Character Id*/
    CharacterId: string;
    /*XP gained while logged off*/
    XPCached: string;
    /*Total allegiance XP contribution.*/
    XPTithed: string;
    Flags: string;
    /*The gender of the character (for determining title).*/
    Gender: string;
    /*The heritage of the character (for determining title).*/
    Heritage: string;
    /*The numerical rank (1 is lowest).*/
    Rank: string;
    Level: string;
    /*Character loyalty.*/
    Loyalty: string;
    /*Character leadership.*/
    Leadership: string;
    TimeOnline: string;
    TimeOnline: string;
    AllegianceAge: string;
    Name: string;
}
interface FriendData {
    FriendId: string;
    Online: string;
    AppearOffline: string;
    Name: string;
    OutFriends: string;
    InFriends: string;
}
/*Data related to an item, namely the amount and description*/
interface ItemProfile {
    PackedAmount: string;
    /*the object Id of the item*/
    ObjectId: string;
    /*details about the item*/
    WeenieDescription: string;
    /*details about the item*/
    OldWeenieDescription: string;
}
/*The PublicWeenieDesc structure defines an object's game behavior.*/
interface PublicWeenieDesc {
    /*game data flags*/
    Header: string;
    /*object name*/
    Name: string;
    /*object weenie class id*/
    WeenieClassId: string;
    /*icon ResourceId (minus 0x06000000)*/
    Icon: string;
    /*object type*/
    Type: string;
    /*object behaviors*/
    Behavior: string;
    /*additional game data flags*/
    Header2: string;
    /*plural object name (if not specified, use <name> followed by 's' or 'es')*/
    PluralName: string;
    /*number of item slots*/
    ItemsCapacity: string;
    /*number of pack slots*/
    ContainerCapacity: string;
    /*missile ammunition type*/
    AmmunitionType: string;
    /*object value*/
    Value: string;
    Useability: string;
    /*distance a player will walk to use an object*/
    UseRadius: string;
    /*the object categories this object may be used on*/
    TargetType: string;
    /*the type of highlight (outline) applied to the object's icon*/
    Effects: string;
    /*the type of wieldable item this is*/
    CombatUse: string;
    /*the number of uses remaining for this item (also salvage quantity)*/
    Structure: string;
    /*the maximum number of uses possible for this item (also maximum salvage quantity)*/
    MaxStructure: string;
    /*the number of items in this stack of objects*/
    StackSize: string;
    /*the maximum number of items possible in this stack of objects*/
    MaxStackSize: string;
    /*the Id of the container holding this object*/
    ContainerId: string;
    /*the Id of the creature equipping this object*/
    WielderId: string;
    /*the potential equipment slots this object may be placed in*/
    ValidSlots: string;
    /*the actual equipment slots this object is currently placed in*/
    Slot: string;
    /*the parts of the body this object protects*/
    Priority: string;
    /*radar dot color*/
    BlipColor: string;
    /*radar type*/
    RadarEnum: string;
    PhysicsScript: string;
    /*object workmanship*/
    Workmanship: string;
    /*total burden of this object*/
    Burden: string;
    /*the spell cast by this object*/
    SpellId: string;
    /*the owner of this object*/
    OwnerId: string;
    /*the access control list for this dwelling object*/
    Restrictions: string;
    /*what type of dwelling hook is this*/
    HookItemTypes: string;
    /*this player's monarch*/
    MonarchId: string;
    /*the types of hooks this object may be placed on (-1 for hooks)*/
    HookType: string;
    /*icon overlay ResourceId (minus 0x06000000)*/
    IconOverlay: string;
    /*icon underlay ResourceId (minus 0x06000000)*/
    IconUnderlay: string;
    /*the type of material this object is made of*/
    Material: string;
    CooldownId: string;
    CooldownDuration: string;
    PetOwnerId: string;
}
/*The RestrictionDB contains the access control list for a dwelling object.*/
interface RestrictionDB {
    /*If high word is not 0, this value indicates the version of the message.*/
    Version: string;
    /*0 = private dwelling, 1 = open to public*/
    Flags: string;
    /*allegiance monarch (if allegiance access granted)*/
    MonarchId: string;
    /*Set of permissions on a per user basis. Key is the character id, value is 0 = dwelling access only, 1 = storage access also*/
    Permissions: string;
}
/*The OldPublicWeenieDesc structure defines an object's game behavior.*/
interface OldPublicWeenieDesc {
    /*game data flags*/
    Header: string;
    /*object name*/
    Name: string;
    /*object weenie class id*/
    WeenieClassId: string;
    /*icon ResourceId (minus 0x06000000)*/
    Icon: string;
    /*object type*/
    Type: string;
    /*object behaviors*/
    Bitfield: string;
    /*plural object name (if not specified, use <name> followed by 's' or 'es')*/
    PluralName: string;
    /*number of item slots*/
    ItemsCapacity: string;
    /*number of pack slots*/
    ContainerCapacity: string;
    /*object value*/
    Value: string;
    Useability: string;
    /*distance a player will walk to use an object*/
    UseRadius: string;
    /*the object categories this object may be used on*/
    tTargetType: string;
    /*the type of highlight (outline) applied to the object's icon*/
    Effects: string;
    /*missile ammunition type*/
    AmmunitionType: string;
    /*the type of wieldable item this is*/
    CombatUse: string;
    /*the number of uses remaining for this item (also salvage quantity)*/
    Structure: string;
    /*the maximum number of uses possible for this item (also maximum salvage quantity)*/
    MaxStructure: string;
    /*the number of items in this stack of objects*/
    StackSize: string;
    /*the maximum number of items possible in this stack of objects*/
    MaxStackSize: string;
    /*the Id of the container holding this object*/
    ContainerId: string;
    /*the Id of the creature equipping this object*/
    WielderId: string;
    /*the potential equipment slots this object may be placed in*/
    ValidSlots: string;
    /*the actual equipment slots this object is currently placed in*/
    Slots: string;
    /*the parts of the body this object protects*/
    Priority: string;
    /*radar dot color*/
    BlipColor: string;
    /*radar type*/
    RadarEnum: string;
    ObviousDistance: string;
    Vndwcid: string;
    /*the spell cast by this object*/
    SpellId: string;
    HouseOwnerId: string;
    PhysicsScript: string;
    /*the access control list for this dwelling object*/
    Restrictions: string;
    /*the types of hooks this object may be placed on (-1 for hooks)*/
    HookType: string;
    /*what type of dwelling hook is this*/
    HookItemTypes: string;
    /*this player's monarch*/
    MonarchId: string;
    /*icon overlay ResourceId (minus 0x06000000)*/
    IconOverlay: string;
    /*the type of material this object is made of*/
    Material: string;
}
/*Information related to a secure trade.*/
interface Trade {
    /*Id of other participant in the trade*/
    PartnerId: string;
    /*Some kind of sequence*/
    Sequence: string;
    /*Some kind of status for the trade TODO*/
    Status: string;
    /*Id of person who initiated the trade*/
    InitiatorId: string;
    /*Whether you accepted this trade*/
    Accepted: string;
    /*Whether the partner accepted this trade*/
    PartnerAccepted: string;
}
/*A jump with sequences*/
interface JumpPack {
    /*Power of jump?*/
    Extent: string;
    /*Velocity data*/
    Velocity: string;
    /*The instance sequence value for the object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The server control sequence value for the object*/
    ObjectServerControlSequence: string;
    /*The teleport sequence value for the object*/
    ObjectTeleportSequence: string;
    /*The forced position sequence value for the object*/
    ObjectForcePositionSequence: string;
}
/*A set of data related to changing states with sequences*/
interface MoveToStatePack {
    /*Raw motion data*/
    RawMotionState: string;
    /*Position data*/
    Position: string;
    /*The instance sequence value for the object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The server control sequence value for the object*/
    ObjectServerControlSequence: string;
    /*The teleport sequence value for the object*/
    ObjectTeleportSequence: string;
    /*The forced position sequence value for the object*/
    ObjectForcePositionSequence: string;
    /*Whether the player has contact with the ground, or if we are in longjump_mode(1 = contact, 2 = longjump_mode)*/
    Contact: string;
}
interface PackedMotionCommand {
    /*Command Id*/
    CommandId: string;
    /*Sequence of the animation.*/
    PackedSequence: string;
    /*Command speed*/
    Speed: string;
}
/*Data related to the movement of the object sent from a client*/
interface RawMotionState {
    /*Command Id*/
    Flags: string;
    CurrentHoldkey: string;
    /*Current stance.  If not present, defaults to 0x3D (NonCombat)*/
    CurrentStyle: string;
    /*Command for our forward movement. If not present, defaults to 0x03 (Ready)*/
    ForwardCommand: string;
    /*Whether forward key is being held*/
    ForwardHoldkey: string;
    /*Forward movement speed. If not present, defaults to 1.0*/
    ForwardSpeed: string;
    /*Command for our sidestep movememnt. If not present, defaults to 0x00*/
    SidestepCommand: string;
    /*Whether sidestep key is being held*/
    SidestepHoldkey: string;
    /*Sidestep movement speed. If not present, defaults to 1.0*/
    SidestepSpeed: string;
    /*Command for our turn movememnt. If not present, defaults to 0x00*/
    TurnCommand: string;
    /*Whether turn key is being held*/
    TurnHoldkey: string;
    /*Turn movement speed. If not present, defaults to 1.0*/
    TurnSpeed: string;
}
/*An autonomous position with sequences*/
interface AutonomousPositionPack {
    /*position*/
    Position: string;
    /*The instance sequence value for the object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The server control sequence value for the object*/
    ObjectServerControlSequence: string;
    /*The teleport sequence value for the object*/
    ObjectTeleportSequence: string;
    /*The forced position sequence value for the object*/
    ObjectForcePositionSequence: string;
    /*Whether the player has contact with the ground*/
    Contact: string;
}
/*A position with sequences*/
interface PositionPack {
    Flags: string;
    /*the location of the object in the world*/
    Origin: string;
    WQuat: string;
    XQuat: string;
    YQuat: string;
    ZQuat: string;
    Velocity: string;
    PlacementId: string;
    /*The instance sequence value for the object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The position sequence value for the object*/
    ObjectPositionSequence: string;
    /*The teleport sequence value for the object*/
    ObjectTeleportSequence: string;
    /*The forced position sequence value for the object*/
    ObjectForcePositionSequence: string;
}
/*Data related to the movement and animation of the object*/
interface MovementData {
    /*The movement sequence value for this object*/
    ObjectMovementSequence: string;
    /*The server control sequence value for the object*/
    ObjectServerControlSequence: string;
    /*0x0 - server controlled, 0x1 - autonomous*/
    Autonomous: string;
    /*Determines the type of movement that follows*/
    MovementType: string;
    /*Options for this movement (sticky, standing long jump)*/
    OptionFlags: string;
    /*Current stance*/
    Stance: string;
    /*Set of motion data*/
    State: string;
    /*object to stick to*/
    StickyObject: string;
    /*The id of target that's being moved to*/
    Target: string;
    /*the location of the target in the world*/
    Origin: string;
    /*Set of movement parameters*/
    MoveToParams: string;
    /*Run speed of the moving object*/
    MyRunRate: string;
    /*the location in the world we are moving to*/
    Origin: string;
    /*Set of movement parameters*/
    MoveToParams: string;
    /*Run speed of the moving object*/
    MyRunRate: string;
    /*The id of target that's being faced*/
    TargetId: string;
    /*Heading of the target to turn to, this is used instead of the desiredHeading in the parameters*/
    DesiredHeading: string;
    /*Set of movement parameters*/
    TurnToParams: string;
    /*Set of movement parameters*/
    TurnToParams: string;
}
/*Contains information for animations and general free motion*/
interface InterpertedMotionState {
    Flags: string;
    /*Stance.  If not present, defaults to 0x3D (NonCombat)*/
    CurrentStyle: string;
    /*Command for our forward movement. If not present, defaults to 0x03 (Ready)*/
    ForwardCommand: string;
    /*Command for our sidestep movememnt. If not present, defaults to 0x00*/
    SidestepCommand: string;
    /*Command for our turn movememnt. If not present, defaults to 0x00*/
    TurnCommand: string;
    /*Forward movement speed. If not present, defaults to 1.0*/
    ForwardSpeed: string;
    /*Sidestep movement speed. If not present, defaults to 1.0*/
    SidestepSpeed: string;
    /*Turn movement speed. If not present, defaults to 1.0*/
    TurnSpeed: string;
}
interface DDDRevision {
    /*Dat File header offset 0x0150, Dat File header offset 0x014C*/
    IdDatFile: string;
    /*The corresponding Dat file revision for this patch set*/
    Iteration: string;
    IdsToDownload: string;
    IdsToPurge: string;
}
/*Set of movement parameters required for a MoveTo movement*/
interface MoveToMovementParameters {
    /*bitmember of some options related to the motion (TODO needs further research)*/
    Bitmember: string;
    /*The distance to the given location*/
    DistanceToObject: string;
    /*The minimum distance required for the movement*/
    MinDistance: string;
    /*The distance at which the movement will fail*/
    FailDistance: string;
    /*speed of animation*/
    AnimationSpeed: string;
    /*The distance from the location which determines whether you walk or run towards it.*/
    WalkRunThreshold: string;
    /*Heading the object is turning to*/
    DesiredHeading: string;
}
/*Set of movement parameters required for a TurnTo motion*/
interface TurnToMovementParameters {
    /*bitmember of some options related to the motion (TODO needs further research)*/
    Bitmember: string;
    /*speed of animation*/
    AnimationSpeed: string;
    /*Heading the object is turning to*/
    DesiredHeading: string;
}
/*The ObjDesc structure defines an object's visual appearance.*/
interface ObjDesc {
    /*always 0x11*/
    Version: string;
    /*the number of palettes associated with this object*/
    PaletteCount: string;
    /*the number of textures associated with this object*/
    TextureCount: string;
    /*the number of models associated with this object*/
    ModelCount: string;
    /*palette DataId (minus 0x04000000)*/
    Palette: string;
}
/*Contains data for a subpalette*/
interface Subpalette {
    /*palette DataId (minus 0x04000000)*/
    Palette: string;
    /*The number of palette entries to skip*/
    Offset: string;
    /*The number of palette entries to copy. This is multiplied by 8.  If it is 0, it defaults to 256*8.*/
    NumColors: string;
}
/*Contains data for texture map changes*/
interface TextureMapChange {
    /*the index of the model we are replacing the texture in*/
    PartIndex: string;
    /*texture DataId (minus 0x05000000)*/
    OldTexId: string;
    /*texture DataId (minus 0x05000000)*/
    NewTexId: string;
}
/*Contains data for animation part changes*/
interface AnimPartChange {
    /*The index of the model*/
    PartIndex: string;
    /*model DataId (minus 0x01000000)*/
    PartId: string;
}
/*Data for a character creation*/
interface CharGenResult {
    /*Account name*/
    Account: string;
    /*Always 1*/
    One: string;
    HeritageGroup: string;
    Gender: string;
    EyesStrip: string;
    NoseStrip: string;
    MouthStrip: string;
    HairColor: string;
    EyeColor: string;
    HairStyle: string;
    HeadgearStyle: string;
    HeadgearColor: string;
    ShirtStyle: string;
    ShirtColor: string;
    TrousersStyle: string;
    TrousersColor: string;
    FootwearStyle: string;
    FootwearColor: string;
    SkinShade: string;
    HairShade: string;
    HeadgearShade: string;
    ShirtShade: string;
    TrousersShade: string;
    TootwearShade: string;
    TemplateNum: string;
    Strength: string;
    Endurance: string;
    Coordination: string;
    Quickness: string;
    Focus: string;
    Self: string;
    Slot: string;
    ClassId: string;
    Skills: string;
    Name: string;
    StartArea: string;
    IsAdmin: string;
    IsEnvoy: string;
    /*Seems to be the total of heritageGroup, gender, eyesStrip, noseStrip, mouthStrip, hairColor, eyeColor, hairStyle, headgearStyle, shirtStyle, trousersStyle, footwearStyle, templateNum, strength, endurance, coordination, quickness, focus, self. Perhaps used for some kind of validation?*/
    Validation: string;
}
/*Basic information for a character used at the Login screen*/
interface CharacterIdentity {
    /*The character Id for this entry.*/
    CharacterId: string;
    /*The name of this character.*/
    Name: string;
    /*When 0, this character is not being deleted (not shown crossed out). Otherwise, it's a countdown timer in the number of seconds until the character is submitted for deletion.*/
    SecondsGreyedOut: string;
}
interface EquipLocation {
    ObjectId: string;
    /*the slot in which this object is equipped, referenced in the Setup table of the dats*/
    Slot: string;
}
/*The PhysicsDesc structure defines an object's physical behavior.*/
interface PhysicsDesc {
    /*physics data flags*/
    Flags: string;
    /*The current physics state for the object*/
    State: string;
    MovementBuffer: string;
    /*Whether the movement is autonomous (0 for no, 1 for yes).  NOTE that this is only present if movementByteCount > 0*/
    Autonomous: string;
    /*The current animation frame.  NOTE this can only be present if 0x00010000 is not set*/
    AnimationFrame: string;
    /*object position*/
    Position: string;
    /*motion table id for this object*/
    MotionId: string;
    /*sound table id for this object*/
    SoundId: string;
    /*physics script table id for this object*/
    PhysicsScriptId: string;
    /*setup table id for this object*/
    SetupId: string;
    /*the creature equipping this object*/
    ParentId: string;
    /*the slot in which this object is equipped, referenced in the Setup table of the dats*/
    ParentLocation: string;
    Children: string;
    /*the size of this object*/
    Scale: string;
    Friction: string;
    Elasticity: string;
    Translucency: string;
    Velocity: string;
    Acceleration: string;
    Omega: string;
    DefaultScript: string;
    DefaultScriptIntensity: string;
    ObjectPositionSequence: string;
    ObjectMovementSequence: string;
    ObjectStateSequence: string;
    ObjectVectorSequence: string;
    ObjectTeleportSequence: string;
    ObjectServerControlSequence: string;
    ObjectForcePositionSequence: string;
    ObjectVisualDescSequence: string;
    ObjectInstanceSequence: string;
}
interface AdminAccountData {
    AccountName: string;
    BookieId: string;
}
interface AdminPlayerData {
    name: string;
    bookieId: string;
}
interface VendorProfile {
    /*the categories of items the merchant will buy*/
    Categories: string;
    /*the lowest value of an item the merchant will buy*/
    MinValue: string;
    /*the highest value of an item the merchant will buy*/
    MaxValue: string;
    DealsMagic: string;
    /*the merchant's buy rate*/
    BuyPrice: string;
    /*the merchant's sell rate*/
    SellPrice: string;
    /*wcid of currency*/
    CurrencyId: string;
    /*amount of currency player has*/
    CurrencyAmount: string;
    /*name of currency*/
    CurrencyName: string;
}
interface ArmorProfile {
    /*relative protection against slashing damage (multiply by AL for actual protection)*/
    ProtSlashing: string;
    /*relative protection against piercing damage (multiply by AL for actual protection)*/
    ProtPiercing: string;
    /*relative protection against bludgeoning damage (multiply by AL for actual protection)*/
    ProtBludgeoning: string;
    /*relative protection against cold damage (multiply by AL for actual protection)*/
    ProtCold: string;
    /*relative protection against fire damage (multiply by AL for actual protection)*/
    ProtFire: string;
    /*relative protection against acid damage (multiply by AL for actual protection)*/
    ProtAcid: string;
    /*relative protection against nether damage (multiply by AL for actual protection)*/
    ProtNether: string;
    /*relative protection against lightning damage (multiply by AL for actual protection)*/
    ProtLightning: string;
}
interface CreatureAppraisalProfile {
    /*These Flags indication which members will be available for assess.*/
    Flags: string;
    /*current health*/
    Health: string;
    /*maximum health*/
    HealthMax: string;
    /*strength*/
    Strength: string;
    /*endurance*/
    Endurance: string;
    /*quickness*/
    Quickness: string;
    /*coordination*/
    Coordination: string;
    /*focus*/
    Focus: string;
    /*self*/
    Self: string;
    /*current stamina*/
    Stamina: string;
    /*current mana*/
    Mana: string;
    /*maximum stamina*/
    StaminaMax: string;
    /*maximum mana*/
    ManaMax: string;
    /*highlight enable bitmask: 0=no, 1=yes*/
    AttrHighlight: string;
    /*highlight color bitmask: 0=red, 1=green*/
    AttrColor: string;
}
interface WeaponProfile {
    /*the type of damage done by the weapon*/
    DamageType: string;
    /*the speed of the weapon*/
    Speed: string;
    /*the skill used by the weapon (-1 if none)*/
    Skill: string;
    /*the maximum damage done by the weapon*/
    Damage: string;
    /*the maximum damage variance of the weapon*/
    Variance: string;
    /*the damage modifier of the weapon*/
    Modifier: string;
    Length: string;
    /*the power of the weapon (this affects range)*/
    MaxVelocity: string;
    /*the attack skill bonus of the weapon*/
    Offsense: string;
    MaxVelocityEstimated: string;
}
interface HookAppraisalProfile {
    Flags: string;
    ValidLocations: string;
    AmmoType: string;
}
interface SquelchDB {
    /*Account name and */
    AccountHash: string;
    CharacterHash: string;
    /*Global squelch information*/
    GlobalInfo: string;
}
/*Set of information related to a squelch entry*/
interface SquelchInfo {
    Filters: string;
    /*the name of the squelched player*/
    Name: string;
    /*Whether this squelch applies to the entire account*/
    Account: string;
}
/*Set of information related to purchasing a housing*/
interface HouseProfile {
    /*the number associated with this dwelling*/
    DwellingId: string;
    /*the object Id of the the current owner*/
    OwnerId: string;
    Flags: string;
    /*the level requirement to purchase this dwelling (-1 if no requirement)*/
    MinLevel: string;
    MaxLevel: string;
    /*the rank requirement to purchase this dwelling (-1 if no requirement)*/
    MinAllegRank: string;
    MaxAllegRank: string;
    MaintenanceFree: string;
    /*the type of dwelling (1=cottage, 2=villa, 3=mansion, 4=apartment)*/
    Type: string;
    /*the name of the current owner*/
    OwnerName: string;
    Buy: string;
    Rent: string;
}
/*The HousePayment structure contains information about a house purchase or maintenance item.*/
interface HousePayment {
    /*the quantity required*/
    Required: string;
    /*the quantity paid*/
    Paid: string;
    /*the item's object type*/
    WeenieClassId: string;
    /*the name of this item*/
    Name: string;
    /*the plural name of this item (if not specified, use <name> followed by 's' or 'es')*/
    PluralName: string;
}
/*Set of information related to owning a housing*/
interface HouseData {
    /*when the house was purchased (Unix timestamp)*/
    BuyTime: string;
    /*when the current maintenance period began (Unix timestamp)*/
    RentTime: string;
    /*the type of house (1=cottage, 2=villa, 3=mansion, 4=apartment)*/
    Type: string;
    /*indicates maintenance is free this period, I assume admin controlled*/
    MaintenanceFree: string;
    Buy: string;
    Rent: string;
    /*house position*/
    Position: string;
}
/*Set of information related to house access*/
interface HAR {
    /*0x10000002, seems to be some kind of version. Older version started with bitmask, so starting with 0x10000000 allows them to determine if this is V1 or V2.  The latter half appears to indicate wheither there is a roommate list or not.*/
    Version: string;
    /*0 is private house, 1 = open to public*/
    Bitmask: string;
    /*populated when any allegiance access is specified*/
    MonarchId: string;
    /*Set of guests with their Id as the key and some additional info for them*/
    GuestList: string;
    /*List that has the Id's of your roommates*/
    RoommateList: string;
}
/*Set of information related to a house guest*/
interface GuestInfo {
    /*0 is just access to house, 1 = access to storage*/
    HasStoragePermission: string;
    /*Name of the guest*/
    GuestName: string;
}
/*Set of information related to a chess game move*/
interface GameMoveData {
    /*Type of move*/
    Type: string;
    /*Player making the move*/
    PlayerId: string;
    /*Team making this move*/
    Team: string;
    /*Id of piece being moved*/
    IdPieceToMove: string;
    YGrid: string;
    /*Id of piece being moved*/
    IdPieceToMove: string;
    YGrid: string;
    /*x position to move the piece*/
    XTo: string;
    /*y position to move the piece*/
    YTo: string;
    /*Id of piece being moved*/
    IdPieceToMove: string;
}
/*Set of information related to a salvage operation*/
interface SalvageOperationsResultData {
    /*Which skill was used for the salvaging action*/
    SkillUsed: string;
    /*Set of items that could not be salvaged*/
    NotSalvagable: string;
    /*Set of salvage returned*/
    SalvageResults: string;
    /*Amount of units due to your Ciandra's Fortune augmentation*/
    AugBonus: string;
}
/*Set of information related to a salvage of an item*/
interface SalvageResult {
    Material: string;
    Workmanship: string;
    Units: string;
}
interface FellowshipLockData {
    /*Always 0 in captures so far*/
    Unknown1: string;
    /*Value varies. May be 2 WORDs*/
    Unknown2: string;
    /*Appears to be some kind of timestamp*/
    Unknown3: string;
    Timestamp: string;
    Sequence: string;
}
/*Set of information for a fellowship*/
interface Fellowship {
    /*Set of fellowship members with their Id as the key and some additional info for them*/
    Members: string;
    /*the fellowship name*/
    Name: string;
    /*the object Id of the fellowship leader*/
    LeaderId: string;
    /*XP sharing: 0=no, 1=yes*/
    ShareXP: string;
    /*Even XP sharing: 0=no, 1=yes*/
    EvenXPSplit: string;
    /*Open fellowship: 0=no, 1=yes*/
    Open: string;
    /*Locked fellowship: 0=no, 1=yes*/
    Locked: string;
    /*I suspect this is a list of recently disconnected fellows which can be reinvited, even in locked fellowship*/
    RecentlyDeparted: string;
    Locks: string;
}
/*The FellowInfo structure contains information about a fellowship member.*/
interface Fellow {
    /*Perhaps cp stored up before distribution?*/
    XPCached: string;
    /*Perhaps lum stored up before distribution?*/
    LumCached: string;
    /*level of member*/
    Level: string;
    /*Maximum Health*/
    MaxHealth: string;
    /*Maximum Stamina*/
    MaxStamina: string;
    /*Maximum Mana*/
    MaxMana: string;
    /*Current Health*/
    CurrentHealth: string;
    /*Current Stamina*/
    CurrentStamina: string;
    /*Current Mana*/
    CurrentMana: string;
    /*if 0 then noSharePhatLoot, if 16 (0x0010) then sharePhatLoot*/
    ShareLoot: string;
    /*Name of Member*/
    Name: string;
}
/*Contains information about a contract.*/
interface ContractTracker {
    Version: string;
    ContractId: string;
    ContractStage: string;
    TimeWhenDone: string;
    TimeWhenRepeats: string;
}
/*Contains table of ContractTrackers*/
interface ContractTrackerTable {
    /*Set of contract trackers  with the contractId as the key and some additional info for them*/
    ContactTrackers: string;
}
/*Set a single character option.*/
interface Character_PlayerOptionChangedEvent {
    /*the option being set*/
    Option: string;
    /*the value of the option*/
    Value: string;
}
/*Starts a melee attack against a target*/
interface Combat_TargetedMeleeAttack {
    /*Id of creature being attacked*/
    ObjectId: string;
    /*Height of the attack*/
    Height: string;
    /*Attack power level*/
    Power: string;
}
/*Starts a missle attack against a target*/
interface Combat_TargetedMissileAttack {
    /*Id of creature being attacked*/
    ObjectId: string;
    /*Height of the attack*/
    Height: string;
    /*Accuracy level*/
    Accuracy: string;
}
/*Set AFK mode.*/
interface Communication_SetAFKMode {
    /*Whether the user is AFK*/
    AFK: string;
}
/*Set AFK message.*/
interface Communication_SetAFKMessage {
    /*The message text*/
    Message: string;
}
/*Talking*/
interface Communication_Talk {
    /*The message text*/
    Message: string;
}
/*Removes a friend*/
interface Social_RemoveFriend {
    /*The id of the friend to remove*/
    ObjectId: string;
}
/*Adds a friend*/
interface Social_AddFriend {
    /*The name of the friend to add*/
    CharacterName: string;
}
/*Store an item in a container.*/
interface Inventory_PutItemInContainer {
    /*The item being stored*/
    ObjectId: string;
    /*The container the item is being stored in*/
    ContainerId: string;
    /*The position in the container where the item is being placed*/
    SlotIndex: string;
}
/*Gets and weilds an item.*/
interface Inventory_GetAndWieldItem {
    /*The item being equipped*/
    ObjectId: string;
    /*The position in the container where the item is being placed*/
    Slot: string;
}
/*Drop an item.*/
interface Inventory_DropItem {
    /*The item being dropped*/
    ObjectId: string;
}
/*Swear allegiance*/
interface Allegiance_SwearAllegiance {
    /*The person you are swearing allegiance to*/
    ObjectId: string;
}
/*Break allegiance*/
interface Allegiance_BreakAllegiance {
    /*The person you are breaking allegiance from*/
    ObjectId: string;
}
/*Allegiance update request*/
interface Allegiance_UpdateRequest {
    /*Whether the UI panel is open*/
    On: string;
}
/*Clears friend list*/
interface Social_ClearFriends {
}
/*Teleport to the PKLite Arena*/
interface Character_TeleToPKLArena {
}
/*Teleport to the PK Arena*/
interface Character_TeleToPKArena {
}
/*Sets a character's display title*/
interface Social_SetDisplayCharacterTitle {
    /*Title id*/
    TitleId: string;
}
/*Query the allegiance name*/
interface Allegiance_QueryAllegianceName {
}
/*Clears the allegiance name*/
interface Allegiance_ClearAllegianceName {
}
/*Direct message by Id*/
interface Communication_TalkDirect {
    /*The message text*/
    Message: string;
    TargetId: string;
}
/*Sets the allegiance name*/
interface Allegiance_SetAllegianceName {
    /*The new allegiance name*/
    Name: string;
}
/*Attempt to use an item with a target.*/
interface Inventory_UseWithTargetEvent {
    /*The item being used*/
    ObjectId: string;
    /*The target*/
    TargetId: string;
}
/*Attempt to use an item.*/
interface Inventory_UseEvent {
    /*The item being used*/
    ObjectId: string;
}
/*Sets an allegiance officer*/
interface Allegiance_SetAllegianceOfficer {
    /*The allegiance officer's name*/
    CharacterName: string;
    /*Level of the officer*/
    Level: string;
}
/*Sets an allegiance officer title for a given level*/
interface Allegiance_SetAllegianceOfficerTitle {
    /*The allegiance officer level*/
    Level: string;
    /*The new title for officers at that level*/
    Title: string;
}
/*List the allegiance officer titles*/
interface Allegiance_ListAllegianceOfficerTitles {
}
/*Clears the allegiance officer titles*/
interface Allegiance_ClearAllegianceOfficerTitles {
}
/*Perform the allegiance lock action*/
interface Allegiance_DoAllegianceLockAction {
    /*Allegiance housing action to take*/
    Action: string;
}
/*Sets a person as an approved vassal*/
interface Allegiance_SetAllegianceApprovedVassal {
    /*Player who is being approved as a vassal*/
    CharacterName: string;
}
/*Gags a person in allegiance chat*/
interface Allegiance_AllegianceChatGag {
    /*Player who is being gagged or ungagged*/
    CharacterName: string;
    /*Whether the gag is on*/
    On: string;
}
/*Perform the allegiance house action*/
interface Allegiance_DoAllegianceHouseAction {
    /*Allegiance housing action to take*/
    Action: string;
}
/*Spend XP to raise a vital.*/
interface Train_TrainAttribute2nd {
    /*The Id of the vital*/
    Type: string;
    /*The amount of XP being spent*/
    Experience: string;
}
/*Spend XP to raise an attribute.*/
interface Train_TrainAttribute {
    /*The Id of the attribute*/
    Type: string;
    /*The amount of XP being spent*/
    Experience: string;
}
/*Spend XP to raise a skill.*/
interface Train_TrainSkill {
    /*The Id of the skill*/
    Skill: string;
    /*The amount of XP being spent*/
    Experience: string;
}
/*Spend skill credits to train a skill.*/
interface Train_TrainSkillAdvancementClass {
    /*The Id of the skill*/
    Skill: string;
    /*The number of skill credits being spent*/
    Credits: string;
}
/*Cast a spell with no target.*/
interface Magic_CastUntargetedSpell {
    /*The Id of the spell*/
    SpellId: string;
}
/*Cast a spell on a target*/
interface Magic_CastTargetedSpell {
    /*The target of the spell*/
    ObjectId: string;
    /*The Id of the spell*/
    SpellId: string;
}
/*Changes the combat mode*/
interface Combat_ChangeCombatMode {
    /*New combat mode for player*/
    Mode: string;
}
/*Merges one stack with another*/
interface Inventory_StackableMerge {
    /*Id of object where items are being taken from*/
    ObjectId: string;
    /*Id of object where items are being merged into*/
    TargetId: string;
    /*Number of items from the source stack to be added to the destination stack*/
    Amount: string;
}
/*Split a stack and place it into a container*/
interface Inventory_StackableSplitToContainer {
    /*Id of object where items are being taken from*/
    ObjectId: string;
    /*Id of container where items are being moved to*/
    ContainerId: string;
    /*Slot in container where items are being moved to*/
    SlotIndex: string;
    /*Number of items from the stack to placed into the container*/
    Amount: string;
}
/*Split a stack and place it into the world*/
interface Inventory_StackableSplitTo3D {
    /*Id of object where items are being taken from*/
    ObjectId: string;
    /*Number of items from the stack to placed into the world*/
    Amount: string;
}
/*Changes an account squelch*/
interface Communication_ModifyCharacterSquelch {
    /*0 = unsquelch, 1 = squelch*/
    Add: string;
    /*The character id who's acount should be squelched*/
    ObjectId: string;
    /*The character's name who's acount should be squelched*/
    CharacterName: string;
    /*The message type to squelch or unsquelch*/
    Type: string;
}
/*Changes an account squelch*/
interface Communication_ModifyAccountSquelch {
    /*0 = unsquelch, 1 = squelch*/
    Add: string;
    /*The character who's acount should be squelched*/
    CharacterName: string;
}
/*Changes the global filters, /filter -type as well as /chat and /notell*/
interface Communication_ModifyGlobalSquelch {
    /*0 = unsquelch, 1 = squelch*/
    Add: string;
    /*The message type to squelch or unsquelch*/
    Type: string;
}
/*Direct message by name*/
interface Communication_TalkDirectByName {
    /*The message text*/
    Message: string;
    /*Name of person you are sending a message to*/
    TargetName: string;
}
/*Buy from a vendor*/
interface Vendor_Buy {
    /*Id of vendor being bought from*/
    ObjectId: string;
    /*Items being purchased from the vendor*/
    Items: string;
    /*the type of alternate currency being used*/
    AlternateCurrencyId: string;
}
/*Sell to a vendor*/
interface Vendor_Sell {
    /*Id of vendor being sold to*/
    ObjectId: string;
    /*Items being sold to the vendor*/
    Items: string;
}
/*Teleport to your lifestone. (/lifestone)*/
interface Character_TeleToLifestone {
}
/*The client is ready for the character to materialize after portalling or logging on.*/
interface Character_LoginCompleteNotification {
}
/*Create a fellowship*/
interface Fellowship_Create {
    /*Name of the fellowship*/
    Name: string;
    /*Whether fellowship shares xp*/
    ShareXP: string;
}
/*Quit the fellowship*/
interface Fellowship_Quit {
    /*Whether to disband the fellowship while quiting*/
    Disband: string;
}
/*Dismiss a player from the fellowship*/
interface Fellowship_Dismiss {
    /*Id of player being dismissed from the fellowship*/
    ObjectId: string;
}
/*Recruit a player to the fellowship*/
interface Fellowship_Recruit {
    /*Id of player being recruited to the fellowship*/
    ObjectId: string;
}
/*Update request*/
interface Fellowship_UpdateRequest {
    /*Whether the fellowship UI is visible*/
    On: string;
}
/*Request update to book data (seems to be sent after failed add page)*/
interface Writing_BookAddPage {
    /*Object id of book*/
    ObjectId: string;
}
/*Updates a page in a book*/
interface Writing_BookModifyPage {
    /*Id of book*/
    ObjectId: string;
    /*Number of page being updated*/
    PageNum: string;
    /*New text for the page*/
    PageText: string;
}
/*Add a page to a book*/
interface Writing_BookData {
    /*Id of book to add a page to*/
    ObjectId: string;
}
/*Removes a page from a book*/
interface Writing_BookDeletePage {
    /*Id of book to remove a page from*/
    ObjectId: string;
    /*Number of page to remove*/
    PageNum: string;
}
/*Requests data for a page in a book*/
interface Writing_BookPageData {
    /*Id of book*/
    ObjectId: string;
    /*Number of page to get data for*/
    PageNum: string;
}
/*Sets the inscription on an object*/
interface Writing_SetInscription {
    /*Id of object being inscribed*/
    ObjectId: string;
    /*Inscription text*/
    Inscription: string;
}
/*Appraise something*/
interface Item_Appraise {
    /*The object being appraised*/
    ObjectId: string;
}
/*Give an item to someone.*/
interface Inventory_GiveObjectRequest {
    /*The recipient of the item*/
    TargetId: string;
    /*The item being given*/
    ObjectId: string;
    /*The amount from a stack being given*/
    Amount: string;
}
/*Advocate Teleport*/
interface Advocate_Teleport {
    /*Person being teleported*/
    ObjectId: string;
    /*Destination to teleport target to*/
    Destination: string;
}
/*Sends an abuse report.*/
interface Character_AbuseLogRequest {
    /*Name of character*/
    Character: string;
    /*1*/
    Status: string;
    /*Description of complaint*/
    Complaint: string;
}
/*Joins a chat channel*/
interface Communication_AddToChannel {
    /*Channel id*/
    Channel: string;
}
/*Leaves a chat channel*/
interface Communication_RemoveFromChannel {
    /*Channel id*/
    Channel: string;
}
/*Sends a message to a chat channel*/
interface Communication_ChannelBroadcast {
    /*Channel id*/
    Channel: string;
    /*the name of the player sending the message*/
    SenderName: string;
    /*Message being sent*/
    Message: string;
}
interface Communication_ChannelList {
    /*Channel id*/
    Channel: string;
}
/*Requests a channel index*/
interface Communication_ChannelIndex {
}
/*Stop viewing the contents of a container*/
interface Inventory_NoLongerViewingContents {
    /*Id of the container*/
    ObjectId: string;
}
/*Splits an item to a wield location.*/
interface Inventory_StackableSplitToWield {
    /*Id of object being split*/
    ObjectId: string;
    /*Equip location to place the stack*/
    Slot: string;
    /*Amount of stack being split*/
    Amount: string;
}
/*Add an item to the shortcut bar.*/
interface Character_AddShortCut {
    /*Shortcut information*/
    Shortcut: string;
}
/*Remove an item from the shortcut bar.*/
interface Character_RemoveShortCut {
    /*Position on the shortcut bar (0-8) of the item to be removed*/
    Index: string;
}
/*Set multiple character options.*/
interface Character_CharacterOptionsEvent {
    Options: string;
}
/*Removes a spell from the spell book*/
interface Magic_RemoveSpell {
    SpellId: string;
}
/*Cancels an attack*/
interface Combat_CancelAttack {
}
/*Query's a creatures health*/
interface Combat_QueryHealth {
    ObjectId: string;
}
/*Query a character's age*/
interface Character_QueryAge {
    ObjectId: string;
}
/*Query a character's birth day*/
interface Character_QueryBirth {
    ObjectId: string;
}
/*Emote message*/
interface Communication_Emote {
    Message: string;
}
/*Soul emote message*/
interface Communication_SoulEmote {
    Message: string;
}
/*Add a spell to a spell bar.*/
interface Character_AddSpellFavorite {
    /*The spell's Id*/
    SpellId: string;
    /*Position on the spell bar where the spell is to be added*/
    Index: string;
    /*The spell bar number*/
    SpellBar: string;
}
/*Remove a spell from a spell bar.*/
interface Character_RemoveSpellFavorite {
    /*The spell's Id*/
    SpellId: string;
    /*The spell bar number*/
    SpellBar: string;
}
/*Request a ping*/
interface Character_RequestPing {
}
/*Starts trading with another player.*/
interface Trade_OpenTradeNegotiations {
    /*Id of player to trade with*/
    ObjectId: string;
}
/*Ends trading, when trade window is closed?*/
interface Trade_CloseTradeNegotiations {
}
/*Adds an object to the trade.*/
interface Trade_AddToTrade {
    /*Id of object to add to the trade*/
    ObjectId: string;
    /*Slot in trade window to add the object*/
    SlotIndex: string;
}
/*Accepts a trade.*/
interface Trade_AcceptTrade {
    /*The contents of the trade*/
    Contents: string;
}
/*Declines a trade, when cancel is clicked?*/
interface Trade_DeclineTrade {
}
/*Resets the trade, when clear all is clicked?*/
interface Trade_ResetTrade {
}
/*Clears the player's corpse looting consent list, /consent clear*/
interface Character_ClearPlayerConsentList {
}
/*Display the player's corpse looting consent list, /consent who */
interface Character_DisplayPlayerConsentList {
}
/*Remove your corpse looting permission for the given player, /consent remove */
interface Character_RemoveFromPlayerConsentList {
    /*Name of player to remove permission to loot the playes corpses*/
    TargetName: string;
}
/*Grants a player corpse looting permission, /permit add*/
interface Character_AddPlayerPermission {
    /*Name of player to grant permission to loot the playes corpses*/
    TargetName: string;
}
/*Buy a house*/
interface House_BuyHouse {
    ObjectId: string;
    /*items being used to buy the house*/
    Items: string;
}
/*Query your house info, during signin*/
interface House_QueryHouse {
}
/*Abandons your house*/
interface House_AbandonHouse {
}
/*Revokes a player's corpse looting permission, /permit remove*/
interface Character_RemovePlayerPermission {
    /*Name of player to remove permission to loot the playes corpses*/
    TargetName: string;
}
/*Pay rent for a house*/
interface House_RentHouse {
    ObjectId: string;
    /*items being used to pay the house rent*/
    Items: string;
}
/*Sets a new fill complevel for a component*/
interface Character_SetDesiredComponentLevel {
    /*class id of the component*/
    Wcid: string;
    Amount: string;
}
/*Adds a guest to your house guest list*/
interface House_AddPermanentGuest {
    /*Player name to add to your house guest list*/
    GuestName: string;
}
/*Removes a specific player from your house guest list, /house guest remove*/
interface House_RemovePermanentGuest {
    /*Player name to remove from your house guest list*/
    GuestName: string;
}
/*Sets your house open status*/
interface House_SetOpenHouseStatus {
    /*Whether the house is open or not*/
    OpenHouse: string;
}
/*Changes a specific players storage permission, /house storage add/remove*/
interface House_ChangeStoragePermission {
    /*Player name to boot from your house*/
    GuestName: string;
    /*Whether the player has permission on your storage*/
    HasPermission: string;
}
/*Boots a specific player from your house /house boot*/
interface House_BootSpecificHouseGuest {
    /*Player name to boot from your house*/
    GuestName: string;
}
/*Removes all storage permissions, /house storage remove_all*/
interface House_RemoveAllStoragePermission {
}
/*Requests your full guest list, /house guest list*/
interface House_RequestFullGuestList {
}
/*Sets the allegiance message of the day, /allegiance motd set*/
interface Allegiance_SetMotd {
    /*Text motd to display*/
    Message: string;
}
/*Query the motd, /allegiance motd*/
interface Allegiance_QueryMotd {
}
/*Clear the motd, /allegiance motd clear*/
interface Allegiance_ClearMotd {
}
/*Gets SlumLord info, sent after getting a failed house transaction*/
interface House_QueryLord {
    /*SlumLord Id to request info for*/
    ObjectId: string;
}
/*Adds all to your storage permissions, /house storage add -all*/
interface House_AddAllStoragePermission {
}
/*Removes all guests, /house guest remove_all*/
interface House_RemoveAllPermanentGuests {
}
/*Boot everyone from your house, /house boot -all*/
interface House_BootEveryone {
}
/*Teleports you to your house, /house recall*/
interface House_TeleToHouse {
}
/*Queries an item's mana*/
interface Item_QueryItemMana {
    /*Id of object whos mana is being queried*/
    ObjectId: string;
}
/*Modify whether house hooks are visibile or not, /house hooks on/off*/
interface House_SetHooksVisibility {
    /*Whether hooks are visible or not*/
    Visible: string;
}
/*Modify whether allegiance members are guests, /house guest add_allegiance/remove_allegiance*/
interface House_ModifyAllegianceGuestPermission {
    /*Whether we are adding or removing permissions*/
    Add: string;
}
/*Modify whether allegiance members can access storage, /house storage add_allegiance/remove_allegiance*/
interface House_ModifyAllegianceStoragePermission {
    /*Whether we are adding or removing permissions*/
    Add: string;
}
/*Joins a chess game*/
interface Game_Join {
    /*Id of the game the player is joining*/
    GameId: string;
    /*Which team the player is joining as*/
    Team: string;
}
/*Quits a chess game*/
interface Game_Quit {
}
/*Makes a chess move*/
interface Game_Move {
    /*Current x location of piece being moved*/
    XFrom: string;
    /*Current y location of piece being moved*/
    YFrom: string;
    /*Destination x location of piece being moved*/
    XTo: string;
    /*Destination y location of piece being moved*/
    YTo: string;
}
/*Skip a move?*/
interface Game_MovePass {
}
/*Offer or confirm stalemate*/
interface Game_Stalemate {
    /*Whether stalemate offer is active or not*/
    On: string;
}
/*Lists available house /house available*/
interface House_ListAvailableHouses {
    /*Type of house being listed*/
    Type: string;
}
/*Confirms a dialog*/
interface Character_ConfirmationResponse {
    Type: string;
    Context: string;
    Accepted: string;
}
/*Boots a player from the allegiance, optionally all characters on their account*/
interface Allegiance_BreakAllegianceBoot {
    /*Name of character to boot*/
    BooteeName: string;
    /*Whether to boot all characters on their account*/
    AccountBoot: string;
}
/*Teleports player to their allegiance housing, /house mansion_recall*/
interface House_TeleToMansion {
}
/*Player is commiting suicide*/
interface Character_Suicide {
}
/*Request allegiance info for a player*/
interface Allegiance_AllegianceInfoRequest {
    /*Name of player whom the request is targeting*/
    TargetName: string;
}
/*Salvages items*/
interface Inventory_CreateTinkeringTool {
    ToolId: string;
    /*Set of object Id's to be salvaged*/
    Items: string;
}
/*Changes the spell book filter*/
interface Character_SpellbookFilterEvent {
    /*Mask containing the different filters applied to the spellbook*/
    Options: string;
}
/*Teleport to the marketplace*/
interface Character_TeleToMarketplace {
}
/*Enter PKLite mode*/
interface Character_EnterPKLite {
}
/*Fellowship Assign a new leader*/
interface Fellowship_AssignNewLeader {
    /*Id of player to make the new leader of the fellowship*/
    ObjectId: string;
}
/*Fellowship Change openness*/
interface Fellowship_ChangeFellowOpeness {
    /*Sets whether the fellowship is open or not*/
    Open: string;
}
/*Boots a player from the allegiance chat*/
interface Allegiance_AllegianceChatBoot {
    /*Character name being booted*/
    CharacterName: string;
    /*Reason for getting booted*/
    Reason: string;
}
/*Bans a player from the allegiance*/
interface Allegiance_AddAllegianceBan {
    /*Character name being banned*/
    CharacterName: string;
}
/*Removes a player ban from the allegiance*/
interface Allegiance_RemoveAllegianceBan {
    /*Character name being unbanned*/
    CharacterName: string;
}
/*Display allegiance bans*/
interface Allegiance_ListAllegianceBans {
}
/*Removes an allegiance officer*/
interface Allegiance_RemoveAllegianceOfficer {
    /*Character name being removed*/
    CharacterName: string;
}
/*List allegiance officers*/
interface Allegiance_ListAllegianceOfficers {
}
/*Clear allegiance officers*/
interface Allegiance_ClearAllegianceOfficers {
}
/*Recalls to players allegiance hometown*/
interface Allegiance_RecallAllegianceHometown {
}
/*Admin Returns a plugin list response*/
interface Admin_QueryPluginListResponse {
    Context: string;
    PluginList: string;
}
/*Admin Returns plugin info*/
interface Admin_QueryPluginResponse {
    Context: string;
    Success: string;
    PluginName: string;
    PluginAuthor: string;
    PluginEmail: string;
    PluginWebpage: string;
}
/*Completes the barber interaction*/
interface Character_FinishBarber {
    BasePalette: string;
    HeadObject: string;
    HeadTexture: string;
    DefaultHeadTexture: string;
    EyesTexture: string;
    DefaultEyesTexture: string;
    NoseTexture: string;
    DefaultNoseTexture: string;
    MouthTexture: string;
    DefaultMouthTexture: string;
    SkinPalette: string;
    HairPalette: string;
    EyesPalette: string;
    SetupId: string;
    /*Specifies the toggle option for some races, such as floating empyrean or flaming head on undead*/
    Option1: string;
    /*Seems to be unused*/
    Option2: string;
}
/*Abandons a contract*/
interface Social_AbandonContract {
    /*Id of contact being abandoned*/
    ContractId: string;
}
/*Performs a jump*/
interface Movement_Jump {
    /*set of jumping data*/
    Jump: string;
}
/*Move to state data*/
interface Movement_MoveToState {
    /*set of move to data, currently not in client, may not be used?*/
    MoveToState: string;
}
/*Performs a movement based on input*/
interface Movement_DoMovementCommand {
    /*motion command*/
    Motion: string;
    /*speed of movement*/
    Speed: string;
    /*run key being held*/
    HoldKey: string;
}
/*Stops a movement*/
interface Movement_StopMovementCommand {
    /*Motion being stopped*/
    Motion: string;
    /*Key being held*/
    HoldKey: string;
}
/*Sets an autonomy level*/
interface Movement_AutonomyLevel {
    /*Seems to be 0, 1 or 2. I think 0/1 is server controlled, 2 is client controlled*/
    AutonomyLevel: string;
}
/*Sends an autonomous position*/
interface Movement_AutonomousPosition {
    /*Set of autonomous position data*/
    Position: string;
}
/*Performs a non autonomous jump*/
interface Movement_Jump_NonAutonomous {
    /*Power of jump*/
    Extent: string;
}
/*Allegiance update cancelled*/
interface Allegiance_AllegianceUpdateAborted {
    /*Failure type*/
    FailureType: string;
}
/*Display a message in a popup message window.*/
interface Communication_PopUpString {
    /*the message text*/
    Message: string;
}
/*Information describing your character.*/
interface Login_PlayerDescription {
    /*Contains basic data types (int, float bool, etc.)*/
    BaseQualities: string;
    Qualities: string;
    PlayerModule: string;
    /*Number of items in your main pack*/
    ContentProfile: string;
    /*Items being equipt.*/
    InventoryPlacement: string;
}
/*Returns info related to your monarch, patron and vassals.*/
interface Allegiance_AllegianceUpdate {
    Rank: string;
    Profile: string;
}
/*Friends list update*/
interface Social_FriendsUpdate {
    Friends: string;
    /*The type of the update*/
    Type: string;
}
/*Store an item in a container.*/
interface Item_ServerSaysContainId {
    /*the object Id of the item being stored*/
    ObjectId: string;
    /*the object Id of the container the item is being stored in*/
    ContainerId: string;
    /*the item slot within the container where the item is being placed (0-based)*/
    SlotIndex: string;
    /*the type of item being stored (pack, foci or regular item)*/
    ContainerType: string;
}
/*Equip an item.*/
interface Item_WearItem {
    /*the object Id of the item being equipped*/
    ObjectId: string;
    /*the slot(s) the item uses*/
    Slot: string;
}
/*Titles for the current character.*/
interface Social_CharacterTitleTable {
    /*the title Id of the currently active title*/
    DisplayTitle: string;
    /*Titles character currently has.*/
    Titles: string;
}
/*Set a title for the current character.*/
interface Social_AddOrSetCharacterTitle {
    /*the title Id of the new title*/
    NewTitle: string;
    /*true if the title should be made the current title, false if it should just be added to the title list*/
    SetAsDisplayTitle: string;
}
/*Close Container - Only sent when explicitly closed*/
interface Item_StopViewingObjectContents {
    /*Chest or corpse being closed*/
    ObjectId: string;
}
/*Open the buy/sell panel for a merchant.*/
interface Vendor_VendorInfo {
    /*the object Id of the merchant*/
    ObjectId: string;
    /*the object Id of the merchant*/
    Profile: string;
    /*Items available from the vendor*/
    Items: string;
}
/*Opens barber UI*/
interface Character_StartBarber {
    BasePalette: string;
    HeadObject: string;
    HeadTexture: string;
    DefaultHeadTexture: string;
    EyesTexture: string;
    DefaultEyesTexture: string;
    NoseTexture: string;
    DefaultNoseTexture: string;
    MouthTexture: string;
    DefaultMouthTexture: string;
    SkinPalette: string;
    HairPalette: string;
    EyesPalette: string;
    SetupId: string;
    /*Specifies the toggle option for some races, such as floating empyrean or flaming head on undead*/
    Option1: string;
    /*Seems to be unused*/
    Option2: string;
}
/*Member left fellowship*/
interface Fellowship_Quit {
    /*Whether to disband the fellowship while quiting*/
    Disband: string;
}
/*Member dismissed from fellowship*/
interface Fellowship_Dismiss {
    /*Id of player being dismissed from the fellowship*/
    ObjectId: string;
}
/*Sent when you first open a book, contains the entire table of contents.*/
interface Writing_BookOpen {
    /*The readable object you have just opened.*/
    BookId: string;
    /*The total number of pages in the book.*/
    MaxNumPages: string;
    /*The set of page data*/
    PageData: string;
    /*The inscription comment and the book title.*/
    Inscription: string;
    /*The author of the inscription (and not coincidentally, the book title).*/
    ScribeId: string;
    /*The name of the inscription author.*/
    ScribeName: string;
}
/*Response to an attempt to add a page to a book.*/
interface Writing_BookAddPageResponse {
    /*The readable object being changed.*/
    BookId: string;
    /*The number the of page being added in the book.*/
    PageNumber: string;
    /*Whether the request was successful*/
    Success: string;
}
/*Response to an attempt to delete a page from a book.*/
interface Writing_BookDeletePageResponse {
    /*The readable object being changed.*/
    BookId: string;
    /*The number the of page being deleted in the book.*/
    PageNumber: string;
    /*Whether the request was successful*/
    Success: string;
}
/*Contains the text of a single page of a book, parchment or sign.*/
interface Writing_BookPageDataResponse {
    /*The object id for the readable object.*/
    ObjectId: string;
    /*The 0-based index of the page you are currently viewing.*/
    Page: string;
    PageData: string;
}
/*Get Inscription Response, doesn't seem to be really used by client*/
interface Item_GetInscriptionResponse {
    /*The inscription comment*/
    Inscription: string;
    /*The name of the inscription author.*/
    ScribeName: string;
    ScribeAccount: string;
}
/*The result of an attempt to assess an item or creature.*/
interface Item_SetAppraiseInfo {
    /*the object Id of the item or creature being assessed*/
    ObjectId: string;
    Flags: string;
    /*assessment successful: 0=no, 1=yes*/
    Success: string;
    IntProperties: string;
    Int64Properties: string;
    BoolProperties: string;
    FloatProperties: string;
    StringProperties: string;
    DataIdProperties: string;
    SpellBook: string;
    ArmorProfile: string;
    CreatureProfile: string;
    WeaponProfile: string;
    HookProfile: string;
    /*highlight enable bitmask: 0=no, 1=yes*/
    ArmorHighlight: string;
    /*highlight color bitmask: 0=red, 1=green*/
    ArmorColor: string;
    /*highlight enable bitmask: 0=no, 1=yes*/
    WeaponHighlight: string;
    /*highlight color bitmask: 0=red, 1=green*/
    WeaponColor: string;
    /*highlight enable bitmask: 0=no, 1=yes*/
    ResistHighlight: string;
    /*highlight color bitmask: 0=red, 1=green*/
    ResistColor: string;
    /*Armor level*/
    BaseArmorHead: string;
    /*Armor level*/
    BaseArmorChest: string;
    /*Armor level*/
    BaseArmorGroin: string;
    /*Armor level*/
    BaseArmorBicep: string;
    /*Armor level*/
    BaseArmorWrist: string;
    /*Armor level*/
    BaseArmorHand: string;
    /*Armor level*/
    BaseArmorThigh: string;
    /*Armor level*/
    BaseArmorShin: string;
    /*Armor level*/
    BaseArmorFoot: string;
}
/*ChannelBroadcast: Group Chat*/
interface Communication_ChannelBroadcast {
    /*Channel id*/
    Channel: string;
    /*Message being sent*/
    Message: string;
}
/*ChannelList: Provides list of characters listening to a channel, I assume in response to a command*/
interface Communication_ChannelList {
    Characters: string;
}
/*ChannelIndex: Provides list of channels available to the player, I assume in response to a command*/
interface Communication_ChannelIndex {
    Channels: string;
}
/*Set Pack Contents*/
interface Item_OnViewContents {
    /*The pack we are setting the contents of. This pack objects and the contained objects may be created before or after the message.*/
    ContainerId: string;
    Items: string;
}
/*ServerSaysMoveItem: Removes an item from inventory (when you place it on the ground or give it away)*/
interface Item_ServerSaysMoveItem {
    /*The item leaving your inventory.*/
    ObjectId: string;
}
/*HandleAttackDoneEvent: Melee attack completed*/
interface Combat_HandleAttackDoneEvent {
    /*Number of user attacks, doesn't appear to be used by client*/
    Number: string;
}
/*RemoveSpell: Delete a spell from your spellbook.*/
interface Magic_RemoveSpell {
    SpellId: string;
}
/*You just died.*/
interface Combat_HandleVictimNotificationEventSelf {
    /*Your (typically mocking) death message.*/
    Message: string;
}
/*Message for a death, something you killed or your own death message.*/
interface Combat_HandleVictimNotificationEventOther {
    /*The text of the nearby or present death message.*/
    Message: string;
}
/*HandleAttackerNotificationEvent: You have hit your target with a melee attack.*/
interface Combat_HandleAttackerNotificationEvent {
    /*the name of your target*/
    DefenderName: string;
    /*the type of damage done*/
    Type: string;
    /*percentage of targets hp removed by damage. 0.0 (low) to 1.0 (high)*/
    DamagePercent: string;
    /*the amount of damage done*/
    Damage: string;
    /*critical hit: 0=no, 1=yes*/
    Critical: string;
    /*additional information about the attack, such as whether it was a Sneak Attack, etc*/
    AttackConditions: string;
}
/*HandleDefenderNotificationEvent: You have been hit by a creature's melee attack.*/
interface Combat_HandleDefenderNotificationEvent {
    /*the name of the creature*/
    AttackerName: string;
    /*the type of damage done*/
    Type: string;
    /*percentage of targets hp removed by damage. 0.0 (low) to 1.0 (high)*/
    DamagePercent: string;
    /*the amount of damage done*/
    Damage: string;
    /*the location of the damage done*/
    Location: string;
    /*critical hit: 0=no, 1=yes*/
    Critical: string;
    /*additional information about the attack, such as whether it was a Sneak Attack, etc.*/
    AttackConditions: string;
}
/*HandleEvasionAttackerNotificationEvent: Your target has evaded your melee attack.*/
interface Combat_HandleEvasionAttackerNotificationEvent {
    /*the name of your target*/
    DefenderName: string;
}
/*HandleEvasionDefenderNotificationEvent: You have evaded a creature's melee attack.*/
interface Combat_HandleEvasionDefenderNotificationEvent {
    /*the name of the creature*/
    AttackerName: string;
}
/*HandleCommenceAttackEvent: Start melee attack*/
interface Combat_HandleCommenceAttackEvent {
}
/*QueryHealthResponse: Update a creature's health bar.*/
interface Combat_QueryHealthResponse {
    /*the object Id of the creature*/
    ObjectId: string;
    /*the amount of health remaining, scaled from 0.0 (none) to 1.0 (full)*/
    Health: string;
}
/*QueryAgeResponse: happens when you do /age in the game*/
interface Character_QueryAgeResponse {
    /*Name of target, or empty if self*/
    TargetName: string;
    /*Your age in the format 1mo 1d 1h 1m 1s*/
    Age: string;
}
/*UseDone: Ready. Previous action complete*/
interface Item_UseDone {
    FailureType: string;
}
/*Allegiance update finished*/
interface Allegiance_AllegianceUpdateDone {
    /*Failure type*/
    FailureType: string;
}
/*Fellow update is done*/
interface Fellowship_FellowUpdateDone {
}
/*Fellow stats are done*/
interface Fellowship_FellowStatsDone {
}
/*Close Assess Panel*/
interface Item_AppraiseDone {
    /*Seems to always be 0. Client does not use it.*/
    Unknown: string;
}
/*Ping Reply*/
interface Character_ReturnPing {
}
/*Squelch and Filter List*/
interface Communication_SetSquelchDB {
    /*The set of squelch information for the user*/
    SquelchDB: string;
}
/*RegisterTrade: Send to begin a trade and display the trade window*/
interface Trade_RegisterTrade {
    /*Person initiating the trade*/
    InitiatorId: string;
    /*Person receiving the trade*/
    PartnerId: string;
    /*Some kind of stamp*/
    Stamp: string;
}
/*OpenTrade: Open trade window*/
interface Trade_OpenTrade {
    /*Person opening the trade*/
    ObjectId: string;
}
/*CloseTrade: End trading*/
interface Trade_CloseTrade {
    /*Reason trade was cancelled*/
    Reason: string;
}
/*RemoveFromTrade: Item was removed from trade window*/
interface Trade_AddToTrade {
    /*The item being removed from trade window*/
    ObjectId: string;
    /*Side of the trade window object was removed*/
    Side: string;
}
/*Removes an item from the trade window, not sure if this is used still?*/
interface Trade_RemoveFromTrade {
    /*The item being removed from the trade window*/
    ObjectId: string;
    /*Side of the trade window object was removed*/
    Side: string;
}
/*AcceptTrade: The trade was accepted*/
interface Trade_AcceptTrade {
    /*Person who accepted the trade*/
    ObjectId: string;
}
/*DeclineTrade: The trade was declined*/
interface Trade_DeclineTrade {
    /*Person who declined the trade*/
    ObjectId: string;
}
/*ResetTrade: The trade window was reset*/
interface Trade_ResetTrade {
    /*Person who cleared the window*/
    ObjectId: string;
}
/*TradeFailure: Failure to add a trade item*/
interface Trade_TradeFailure {
    /*Item that could not be added to trade window*/
    ObjectId: string;
    /*The numeric reason it couldn't be traded. Client does not appear to use this.*/
    Reason: string;
}
/*ClearTradeAcceptance: Failure to complete a trade*/
interface Trade_ClearTradeAcceptance {
}
/*Buy a dwelling or pay maintenance*/
interface House_HouseProfile {
    /*the object Id of the dwelling's covenant crystal*/
    ObjectId: string;
    Profile: string;
}
/*House panel information for owners.*/
interface House_HouseData {
    /*the house data*/
    Data: string;
}
/*House Data*/
interface House_HouseStatus {
    /*Type of message to display*/
    NoticeType: string;
}
/*Update Rent Time*/
interface House_UpdateRentTime {
    /*when the current maintenance period began (Unix timestamp)*/
    RentTime: string;
}
/*Update Rent Payment*/
interface House_UpdateRentPayment {
    Rent: string;
}
/*Update Restrictions*/
interface House_UpdateRestrictions {
    /*Sequence value for restrictions list for this house*/
    Sequence: string;
    /*Object having restrictions updated*/
    SenderId: string;
    /*Restrictions database*/
    Restrictions: string;
}
/*House Guest List*/
interface House_UpdateHAR {
    /*Set of house access records*/
    GuestList: string;
}
/*House Profile*/
interface House_HouseTransaction {
    /*Type of message to display*/
    NoticeType: string;
}
/*Update an item's mana bar.*/
interface Item_QueryItemManaResponse {
    /*the object Id of the item*/
    ObjectId: string;
    /*the amount of mana remaining, scaled from 0.0 (none) to 1.0 (full)*/
    Mana: string;
    /*show mana bar: 0=no, 1=yes*/
    Success: string;
}
/*Display a list of available dwellings in the chat window.*/
interface House_AvailableHouses {
    /*The type of house (1=cottage, 2=villa, 3=mansion, 4=apartment)*/
    Type: string;
    /*Landcell location of the houses*/
    Houses: string;
    /*The total number of houses of this type available*/
    NumHouses: string;
}
/*Display a confirmation panel.*/
interface Character_ConfirmationRequest {
    /*the type of confirmation panel to display*/
    ConfirmationType: string;
    /*sequence number*/
    ContextId: string;
    /*text to be included in the confirmation panel message*/
    Text: string;
}
/*Confirmation done*/
interface Character_ConfirmationDone {
    /*the type of confirmation panel being closed*/
    ConfirmationType: string;
    /*sequence number*/
    ContextId: string;
}
/*Display an allegiance login/logout message in the chat window.*/
interface Allegiance_AllegianceLoginNotificationEvent {
    /*the object Id of the player logging in or out*/
    CharacterId: string;
    /*0=logout, 1=login*/
    IsLoggedIn: string;
}
/*Returns data for a player's allegiance information*/
interface Allegiance_AllegianceInfoResponseEvent {
    /*Target of the request*/
    TargetId: string;
    /*Allegiance Profile Data*/
    Profile: string;
}
/*Joining game response*/
interface Game_JoinGameResponse {
    /*Some kind of identifier for this game*/
    GameId: string;
    /*-1 indicates failure, otherwise which team you are for this game*/
    Team: string;
}
/*Start game*/
interface Game_StartGame {
    /*Some kind of identifier for this game*/
    GameId: string;
    /*Which team that should go first*/
    Team: string;
}
/*Move response*/
interface Game_MoveResponse {
    /*Some kind of identifier for this game*/
    GameId: string;
    /*If less than or equal to 0, then failure*/
    MoveResult: string;
}
/*Opponent Turn*/
interface Game_OpponentTurn {
    /*Some kind of identifier for this game*/
    GameId: string;
    /*Team making this move*/
    Team: string;
    /*Data related to the piece move*/
    GameMove: string;
}
/*Opponent Stalemate State*/
interface Game_OpponentStalemateState {
    /*Some kind of identifier for this game*/
    GameId: string;
    /*Team*/
    Team: string;
    /*1 = offering stalemate, 0 = retracting stalemate*/
    On: string;
}
/*Display a status message in the chat window.*/
interface Communication_WeenieError {
    /*the type of status message to display*/
    Type: string;
}
/*Display a parameterized status message in the chat window.*/
interface Communication_WeenieErrorWithString {
    /*the type of status message to display*/
    Type: string;
    /*text to be included in the status message*/
    Text: string;
}
/*End of Chess game*/
interface Game_GameOver {
    GameId: string;
    /*Which team was the winner for this game*/
    TeamWinner: string;
}
/*Set Turbine Chat channel numbers.*/
interface Communication_ChatRoomTracker {
    /*the channel number of the allegiance channel*/
    AllegianceRoomId: string;
    /*the channel number of the general channel*/
    GeneralChatRoomId: string;
    /*the channel number of the trade channel*/
    TradeChatRoomId: string;
    /*the channel number of the looking-for-group channel*/
    LFGChatRoomId: string;
    /*the channel number of the roleplay channel*/
    RoleplayChatRoomId: string;
    /*the channel number of the olthoi channel*/
    OlthoiChatRoomId: string;
    /*the channel number of the society channel*/
    SocietyChatRoomId: string;
    /*the channel number of the Celestial Hand channel*/
    SocietyCelestialHandChatRoomId: string;
    /*the channel number of the Eldrich Web channel*/
    SocietyEldrichWebChatRoomId: string;
    /*the channel number of the Radiant Blood channel*/
    SocietyRadiantBloodChatRoomId: string;
}
/*TODO: QueryPluginList*/
interface Admin_QueryPluginList {
}
/*TODO: QueryPlugin*/
interface Admin_QueryPlugin {
}
/*TODO: QueryPluginResponse*/
interface Admin_QueryPluginResponse2 {
}
/*Salvage operation results*/
interface Inventory_SalvageOperationsResultData {
    Result: string;
}
/*Someone has sent you a @tell.*/
interface Communication_HearDirectSpeech {
    /*the message text*/
    Message: string;
    /*the name of the creature sending you the message*/
    SenderName: string;
    /*the object Id of the creature sending you the message*/
    SenderId: string;
    /*the object Id of the recipient of the message (should be you)*/
    TargetId: string;
    /*the message type, controls color and @filter processing*/
    Type: string;
    /*doesn't seem to be used by the client*/
    SecretFlags: string;
}
/*Create or join a fellowship*/
interface Fellowship_FullUpdate {
    /*Full set of fellowship information*/
    Fellowship: string;
}
/*Disband your fellowship.*/
interface Fellowship_Disband {
}
/*Add/Update a member to your fellowship.*/
interface Fellowship_UpdateFellow {
    Fellow: string;
    UpdateType: string;
}
/*Add a spell to your spellbook.*/
interface Magic_UpdateSpell {
    /*the spell Id of the new spell*/
    SpellId: string;
}
/*Apply an enchantment to your character.*/
interface Magic_UpdateEnchantment {
    Enchantment: string;
}
/*Remove an enchantment from your character.*/
interface Magic_RemoveEnchantment {
    /*the spell Id of the enchantment to be removed*/
    SpellId: string;
}
/*Update multiple enchantments from your character.*/
interface Magic_UpdateMultipleEnchantments {
    /*List of enchantments getting updated*/
    Enchantments: string;
}
/*Remove multiple enchantments from your character.*/
interface Magic_RemoveMultipleEnchantments {
    /*List of enchantments getting removed*/
    Enchantments: string;
}
/*Silently remove all enchantments from your character, e.g. when you die (no message in the chat window).*/
interface Magic_PurgeEnchantments {
}
/*Silently remove An enchantment from your character.*/
interface Magic_DispelEnchantment {
    /*the spell Id of the enchantment to be removed*/
    SpellId: string;
}
/*Silently remove multiple enchantments from your character (no message in the chat window).*/
interface Magic_DispelMultipleEnchantments {
    /*List of enchantments getting removed*/
    Enchantments: string;
}
/*A portal storm is brewing.*/
interface Misc_PortalStormBrewing {
    /*Less than or equal to 0.0 resets timer, otherwise sets timer*/
    Extent: string;
}
/*A portal storm is imminent.*/
interface Misc_PortalStormImminent {
    /*Less than or equal to 0.0 resets timer, otherwise sets timer*/
    Extent: string;
}
/*You have been portal stormed.*/
interface Misc_PortalStorm {
}
/*The portal storm has subsided.*/
interface Misc_PortalStormSubsided {
}
/*Display a status message on the Action Viewscreen (the red text overlaid on the 3D area).*/
interface Communication_TransientString {
    /*the message text*/
    Message: string;
}
/*Remove all bad enchantments from your character.*/
interface Magic_PurgeBadEnchantments {
}
/*Sends all contract data*/
interface Social_SendClientContractTrackerTable {
    ContractTracker: string;
}
/*Updates a contract data*/
interface Social_SendClientContractTracker {
    ContractTracker: string;
    DeleteContract: string;
    SetAsDisplayContract: string;
}
/*Instructs the client to return to 2D mode - the character list.*/
interface Login_LogOffCharacter {
}
/*Mark a character for deletetion.*/
interface Character_CharacterDelete {
    /*The account for the character*/
    Account: string;
    /*Slot to delete*/
    Slot: string;
}
/*Character creation result*/
interface Character_SendCharGenResult {
    /*The account for the character*/
    Account: string;
    /*The data for the character generation*/
    Result: string;
}
/*The character to log in.*/
interface Login_SendEnterWorld {
    /*The character Id of the character to log in*/
    CharacterId: string;
    /*The account name associated with the character*/
    Account: string;
}
/*Asks server for a new object description*/
interface Object_SendForceObjdesc {
    /*Object to get new Obj Desc for*/
    ObjectId: string;
}
/*The user has clicked 'Enter'. This message does not contain the Id of the character logging on; that comes later.*/
interface Login_SendEnterWorldRequest {
}
/*Sent if player is an PSR, I assume it displays the server version number*/
interface Admin_SendAdminGetServerVersion {
}
/*Seems to be a legacy friends command, /friends old, for when Jan 2006 event changed the friends list*/
interface Social_SendFriendsCommand {
    /*Only 0 is used in client, I suspect it is list/display*/
    Command: string;
    /*I assume it would be used to pass a friend to add/remove.  Display passes null string.*/
    Player: string;
}
/*Admin command to restore a character*/
interface Admin_SendAdminRestoreCharacter {
    /*Id of character to restore*/
    ObjectId: string;
    /*Name of character to restore*/
    RestoredCharName: string;
    /*Account name to restore the character on*/
    AccountToRestoreTo: string;
}
/*Send or receive a message using Turbine Chat.*/
interface Communication_TurbineChat {
    /*the number of bytes that follow after this DWORD*/
    MmessageSize: string;
    /*the type of data contained in this message*/
    Type: string;
    BlobDispatchType: string;
    TargetType: string;
    TargetId: string;
    TransportType: string;
    TransportId: string;
    Cookie: string;
    /*the number of bytes that follow after this DWORD*/
    PayloadSize: string;
    /*the channel number of the message*/
    RoomId: string;
    /*the name of the player sending the message*/
    DisplayName: string;
    /*the message text*/
    Text: string;
    /*the number of bytes that follow after this DWORD*/
    ExtraDataSize: string;
    /*the object Id of the player sending the message*/
    SpeakerId: string;
    HResult: string;
    ChatType: string;
    ContextId: string;
    ResponseId: string;
    MethodId: string;
    /*the channel number of the message*/
    RoomId: string;
    /*the message text*/
    Text: string;
    /*the number of bytes that follow after this DWORD*/
    ExtraDataSize: string;
    /*the object Id of the player sending the message (should be you)*/
    SpeakerId: string;
    HResult: string;
    ChatType: string;
    ContextId: string;
    /*Type of response, should be 1 here*/
    ResponseId: string;
    /*Type of request, should be 1 here*/
    MethodId: string;
    HResult: string;
    ContextId: string;
    /*Type of response, should be 2 here*/
    ResponseId: string;
    /*Type of request, should be 2 here*/
    MethodId: string;
    HResult: string;
}
/*DDD request for data*/
interface DDD_RequestDataMessage {
    /*the resource type*/
    ResourceType: string;
    /*the resource Id number*/
    ResourceId: string;
}
/*TODO*/
interface DDD_InterrogationResponseMessage {
    Language: string;
    Files: string;
}
/*Ends DDD message update*/
interface DDD_EndDDDMessage {
}
/*Ends DDD update*/
interface DDD_OnEndDDD {
}
/*Sent every time an object you are aware of ceases to exist. Merely running out of range does not generate this message - in that case, the client just automatically stops tracking it after receiving no updates for a while (which I presume is a very short while).*/
interface Item_ServerSaysRemove {
    /*The object that ceases to exist.*/
    ObjectId: string;
}
/*Failure to give an item*/
interface Character_ServerSaysAttemptFailed {
    /*Item that could not be given*/
    ObjectId: string;
    /*Failure reason code*/
    Reason: string;
}
/*For stackable items, this changes the number of items in the stack.*/
interface Item_UpdateStackSize {
    /*Sequence number for this message*/
    Sequence: string;
    /*Item getting it's stack adjusted.*/
    ObjectId: string;
    /*New number of items in the stack.*/
    Amount: string;
    /*New value for the item.*/
    NewValue: string;
}
/*A Player Kill occurred nearby (also sent for suicides).*/
interface Combat_HandlePlayerDeathEvent {
    /*The death message*/
    Message: string;
    /*The Id of the departed.*/
    KilledId: string;
    /*The Id of the character doing the killing.*/
    KillerId: string;
}
/*Remove an int property from the character*/
interface Qualities_PrivateRemoveIntEvent {
    Sequence: string;
    Type: string;
}
/*Remove an int property from an object*/
interface Qualities_RemoveIntEvent {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Remove a bool property from the charactert*/
interface Qualities_PrivateRemoveBoolEvent {
    Sequence: string;
    Type: string;
}
/*Remove a bool property from an object*/
interface Qualities_RemoveBoolEvent {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Remove a float property from the character*/
interface Qualities_PrivateRemoveFloatEvent {
    Sequence: string;
    Type: string;
}
/*Remove a float property from an object*/
interface Qualities_RemoveFloatEvent {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Remove a string property from the character*/
interface Qualities_PrivateRemoveStringEvent {
    Sequence: string;
    Type: string;
}
/*Remove a string property from an object*/
interface Qualities_RemoveStringEvent {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Remove an dataId property from the character*/
interface Qualities_PrivateRemoveDataIdEvent {
    Sequence: string;
    Type: string;
}
/*Remove an dataId property from an object*/
interface Qualities_RemoveDataIdEvent {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Remove an instanceId property from the character*/
interface Qualities_PrivateRemoveInstanceIdEvent {
    Sequence: string;
    Type: string;
}
/*Remove an instanceId property from an object*/
interface Qualities_RemoveInstanceIdEvent {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Remove a position property from the character*/
interface Qualities_PrivateRemovePositionEvent {
    Sequence: string;
    Type: string;
}
/*Remove a position property from an object*/
interface Qualities_RemovePositionEvent {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Remove an int64 property from the character*/
interface Qualities_PrivateRemoveInt64Event {
    Sequence: string;
    Type: string;
}
/*Remove an int64 property from an object*/
interface Qualities_RemoveInt64Event {
    Sequence: string;
    /*Id of object being updated*/
    ObjectId: string;
    Type: string;
}
/*Set or update a Character Int property value*/
interface Qualities_PrivateUpdateInt {
    /*sequence number*/
    Sequence: string;
    /*Int property Id*/
    Key: string;
    /*Int property value*/
    Value: string;
}
/*Set or update an Object Int property value*/
interface Qualities_UpdateInt {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*Int property Id*/
    Key: string;
    /*Int property value*/
    Value: string;
}
/*Set or update a Character Int64 property value*/
interface Qualities_PrivateUpdateInt64 {
    /*sequence number*/
    Sequence: string;
    /*Int64 property Id*/
    Key: string;
    /*Int64 property value*/
    Value: string;
}
/*Set or update a Character Int64 property value*/
interface Qualities_UpdateInt64 {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*Int64 property Id*/
    Key: string;
    /*Int64 property value*/
    Value: string;
}
/*Set or update a Character Boolean property value*/
interface Qualities_PrivateUpdateBool {
    /*sequence number*/
    Sequence: string;
    /*Boolean property Id*/
    Key: string;
    /*Boolean property value (0=False, 1=True)*/
    Value: string;
}
/*Set or update an Object Boolean property value*/
interface Qualities_UpdateBool {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*Boolean property Id*/
    Key: string;
    /*Boolean property value (0=False, 1=True)*/
    Value: string;
}
/*Set or update an Object float property value*/
interface Qualities_PrivateUpdateFloat {
    /*sequence number*/
    Sequence: string;
    /*Float property Id*/
    Key: string;
    /*Float property value*/
    Value: string;
}
/*Set or update an Object float property value*/
interface Qualities_UpdateFloat {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*Float property Id*/
    Key: string;
    /*Float property value*/
    Value: string;
}
/*Set or update an Object String property value*/
interface Qualities_PrivateUpdateString {
    /*sequence number*/
    Sequence: string;
    /*String property Id*/
    Key: string;
    /*String property value*/
    Value: string;
}
/*Set or update an Object String property value*/
interface Qualities_UpdateString {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*String property Id*/
    Key: string;
    /*String property value*/
    Value: string;
}
/*Set or update an Object DId property value*/
interface Qualities_PrivateUpdateDataId {
    /*sequence number*/
    Sequence: string;
    /*Data property Id*/
    Key: string;
    /*Resource property value*/
    Value: string;
}
/*Set or update an Object DId property value*/
interface Qualities_UpdateDataId {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*Data property Id*/
    Key: string;
    /*Resource property value*/
    Value: string;
}
/*Set or update a IId property value*/
interface Qualities_PrivateUpdateInstanceId {
    /*sequence number*/
    Sequence: string;
    /*Instance property Id*/
    Key: string;
    /*Link property value*/
    Value: string;
}
/*Set or update an Object IId property value*/
interface Qualities_UpdateInstanceId {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*Instance property Id*/
    Key: string;
    /*Link property value*/
    Value: string;
}
/*Set or update a Character Position property value*/
interface Qualities_PrivateUpdatePosition {
    /*sequence number*/
    Sequence: string;
    /*Position property Id*/
    Key: string;
    /*Position property value*/
    Value: string;
}
/*Set or update a Character Position property value*/
interface Qualities_UpdatePosition {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*Position property Id*/
    Key: string;
    /*Position property value*/
    Value: string;
}
/*Set or update a Character Skill value*/
interface Qualities_PrivateUpdateSkill {
    /*sequence number*/
    Sequence: string;
    /*skill Id*/
    Key: string;
    /*skill information*/
    Value: string;
}
/*Set or update a Character Skill value*/
interface Qualities_UpdateSkill {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*skill Id*/
    Key: string;
    /*skill information*/
    Value: string;
}
/*Set or update a Character Skill Level*/
interface Qualities_PrivateUpdateSkillLevel {
    /*sequence number*/
    Sequence: string;
    /*skill Id*/
    Key: string;
    /*skill level value*/
    Value: string;
}
/*Set or update a Character Skill Level*/
interface Qualities_UpdateSkillLevel {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*skill Id*/
    Key: string;
    /*skill level value*/
    Value: string;
}
/*Set or update a Character Skill state*/
interface Qualities_PrivateUpdateSkillAC {
    /*sequence number*/
    Sequence: string;
    /*skill Id*/
    Key: string;
    /*skill state*/
    Value: string;
}
/*Set or update a Character Skill state*/
interface Qualities_UpdateSkillAC {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*skill Id*/
    Key: string;
    /*skill state*/
    Value: string;
}
/*Set or update a Character Attribute value*/
interface Qualities_PrivateUpdateAttribute {
    /*sequence number*/
    Sequence: string;
    /*attribute Id*/
    Key: string;
    /*attribute information*/
    Value: string;
}
/*Set or update a Character Attribute value*/
interface Qualities_UpdateAttribute {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*attribute Id*/
    Key: string;
    /*attribute information*/
    Value: string;
}
/*Set or update a Character Attribute Level*/
interface Qualities_PrivateUpdateAttributeLevel {
    /*sequence number*/
    Sequence: string;
    /*attribute Id*/
    Key: string;
    /*current value*/
    Value: string;
}
/*Set or update a Character Attribute Level*/
interface Qualities_UpdateAttributeLevel {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*attribute Id*/
    Key: string;
    /*current value*/
    Value: string;
}
/*Set or update a Character Vital value*/
interface Qualities_PrivateUpdateAttribute2nd {
    /*sequence number*/
    Sequence: string;
    /*vital Id*/
    Key: string;
    /*vital information*/
    Value: string;
}
/*Set or update a Character Vital value*/
interface Qualities_UpdateAttribute2nd {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*vital Id*/
    Key: string;
    /*vital information*/
    Value: string;
}
/*Set or update a Character Vital value*/
interface Qualities_PrivateUpdateAttribute2ndLevel {
    /*sequence number*/
    Sequence: string;
    /*vital Id*/
    Key: string;
    /*current value*/
    Value: string;
}
/*Set or update a Character Vital value*/
interface Qualities_UpdateAttribute2ndLevel {
    /*sequence number*/
    Sequence: string;
    /*object Id*/
    ObjectId: string;
    /*vital Id*/
    Key: string;
    /*current value*/
    Value: string;
}
/*Indirect '/e' text.*/
interface Communication_HearEmote {
    /*The Id of the character performing the emote - used for squelch/radar filtering.*/
    SenderId: string;
    /*Name of the character performing the emote.*/
    SenderName: string;
    /*Text representation of the emote.*/
    Text: string;
}
/*Contains the text associated with an emote action.*/
interface Communication_HearSoulEmote {
    /*The Id of the character performing the emote - used for squelch/radar filtering.*/
    SenderId: string;
    /*Name of the character performing the emote.*/
    SenderName: string;
    /*Text representation of the emote.*/
    Text: string;
}
/*A message to be displayed in the chat window, spoken by a nearby player, NPC or creature*/
interface Communication_HearSpeech {
    /*message text*/
    Message: string;
    /*sender name*/
    SenderName: string;
    /*sender Id*/
    SenderId: string;
    /*message type*/
    Type: string;
}
/*A message to be displayed in the chat window, spoken by a nearby player, NPC or creature*/
interface Communication_HearRangedSpeech {
    /*message text*/
    Message: string;
    /*sender name*/
    SenderName: string;
    /*sender Id, must be between 0x50000001 and 0x6FFFFFFF to appear as clickable*/
    SenderId: string;
    /*broadcast range*/
    Range: string;
    /*message type*/
    Type: string;
}
/*This appears to be an admin command to change the environment (light, fog, sounds, colors)*/
interface Admin_Environs {
    /*Id of option set to change the environs*/
    EnvrionOption: string;
}
/*Sets both the position and movement, such as when materializing at a lifestone*/
interface Movement_PositionAndMovementEvent {
    /*ObjectId of the character doing the animation*/
    ObjectId: string;
    Position: string;
    /*Set of movement data*/
    MovementData: string;
}
/*Sent whenever a character changes their clothes. It contains the entire description of what their wearing (and possibly their facial features as well). This message is only sent for changes, when the character is first created, the body of this message is included inside the creation message.*/
interface Item_ObjDescEvent {
    /*The Id of character whose visual description is changing.*/
    ObjectId: string;
    /*Set of visual description information for the object*/
    ObjectDescription: string;
    /*The instance sequence value for the object (number of logins for players)*/
    InstanceSequence: string;
    /*The position sequence value for the object*/
    VisualDescSequence: string;
}
/*Sets the player visual desc, TODO confirm this*/
interface Character_SetPlayerVisualDesc {
    /*Set of visual description information for the player*/
    ObjectDescription: string;
}
/*Character creation screen initilised.*/
interface Character_CharGenVerificationResponse {
    /*Type of response*/
    ResponseType: string;
    /*The character Id for this entry.*/
    CharacterId: string;
    /*The name of this character.*/
    Name: string;
    /*When 0, this character is not being deleted (not shown crossed out). Otherwise, it's a countdown timer in the number of seconds until the character is submitted for deletion.*/
    SecondsUntilDeletion: string;
}
/*Sent when your subsciption is about to expire*/
interface Login_AwaitingSubscriptionExpiration {
    /*Time remaining before your subscription expires.*/
    SecondsRemaining: string;
}
/*Instructs the client to return to 2D mode - the character list.*/
interface Login_LogOffCharacter {
}
/*A character was marked for deletetion.*/
interface Character_CharacterDelete {
}
/*The list of characters on the current account.*/
interface Login_LoginCharacterSet {
    Status: string;
    Characters: string;
    DeletedCharacters: string;
    /*The total count of character slots this server supports.*/
    NumAllowedCharacters: string;
    /*The name for this account.*/
    Account: string;
    /*Whether or not Turbine Chat (Allegiance chat) enabled.*/
    UseTurbineChat: string;
    /*Whether or not this account has purchansed ToD*/
    HasThroneofDestiny: string;
}
/*Failure to log in*/
interface Character_CharacterError {
    /*Identifies type of error*/
    Reason: string;
}
/*Create an object somewhere in the world*/
interface Item_CreateObject {
    /*object Id*/
    ObjectId: string;
    ObjectDescription: string;
    PhysicsDescription: string;
    WeenieDescription: string;
}
/*Login of player*/
interface Login_CreatePlayer {
    /*Id of the character logging on - should be you.*/
    CharacterId: string;
}
/*Sent whenever an object is being deleted from the scene.*/
interface Item_DeleteObject {
    /*The object that was recently erased.*/
    ObjectId: string;
    /*The instance sequence value for the object (number of logins for players)*/
    ObjectInstanceSequence: string;
}
/*Sets the position/motion of an object*/
interface Movement_PositionEvent {
    /*The object with the position changing.*/
    ObjectId: string;
    /*The current or starting location.*/
    Position: string;
}
/*Sets the parent for an object, eg. equipting an object.*/
interface Item_ParentEvent {
    /*id of the parent object*/
    ParentId: string;
    /*id of the child object*/
    ChildId: string;
    /*Location object is being equipt to (Read from CSetup table in dat)*/
    Location: string;
    /*Placement frame id*/
    Placement: string;
    /*The instance sequence value for the parent object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The position sequence value for the child object*/
    ChildPositionSequence: string;
}
/*Sent when picking up an object*/
interface Inventory_PickupEvent {
    /*The object being picked up*/
    ObjectId: string;
    /*The instance sequence value for the object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The position sequence value for the object*/
    ObjectPositionSequence: string;
}
/*Set's the current state of the object. Client appears to only process the following state changes post creation: NoDraw, LightingOn, Hidden*/
interface Item_SetState {
    /*The object being changed*/
    ObjectId: string;
    /*The new state for the object*/
    NewState: string;
    /*The instance sequence value for this object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The state sequence value for this object*/
    ObjectStateSequence: string;
}
/*These are animations. Whenever a human, monster or object moves - one of these little messages is sent. Even idle emotes (like head scratching and nodding) are sent in this manner.*/
interface Movement_SetObjectMovement {
    /*Id of the character moving*/
    ObjectId: string;
    /*The instance sequence value for this object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*Set of movement data*/
    MovementData: string;
}
/*Changes an objects vector, for things like jumping*/
interface Movement_VectorUpdate {
    /*Id of the object being updated*/
    ObjectId: string;
    /*new velocity component*/
    Velocity: string;
    /*new omega component*/
    Omega: string;
    /*The instance sequence value for this object (number of logins for players)*/
    ObjectInstanceSequence: string;
    /*The vector sequence value for this object*/
    ObjectVectorSequence: string;
}
/*Applies a sound effect.*/
interface Effects_SoundEvent {
    /*Id of the object from which the effect originates. Can be you, another char/npc or an item.*/
    ObjectId: string;
    /*The sound type Id, which is referenced in the Sound Table.*/
    SoundType: string;
    /*Volume to play the sound*/
    Volume: string;
}
/*Instructs the client to show the portal graphic.*/
interface Effects_PlayerTeleport {
    /*The teleport sequence value for the object*/
    ObjectTeleportSequence: string;
}
/*Instructs the client to play a script. (Not seen so far, maybe prefered PlayScriptType)*/
interface Effects_PlayScriptId {
    /*Id of the object to play the script*/
    ObjectId: string;
    /*Id of script to be played*/
    ScriptId: string;
}
/*Applies an effect with visual and sound by providing the type to be looked up in the Physics Script Table*/
interface Effects_PlayScriptType {
    /*Id of the object from which the effect originates. Can be you, another char/npc or an item.*/
    ObjectId: string;
    /*The script type id*/
    ScriptType: string;
    /*Speed to play the particle effect at.  1.0 is default, lower for slower, higher for faster.*/
    Speed: string;
}
/*Account has been banned*/
interface Login_AccountBanned {
    /*Timestamp when ban expires, or 0 for permaban*/
    BannedUntil: string;
    /*I believe this will be empty (len=1) in current version*/
    Text: string;
}
/*Admin Receive Account Data*/
interface Admin_ReceiveAccountData {
    Unknown: string;
    /*Set of account data*/
    AdminAccountData: string;
}
/*Admin Receive Player Data*/
interface Admin_ReceivePlayerData {
    Unknown: string;
    /*Set of player data*/
    AdminPlayerData: string;
}
/*Update an existing object's data.*/
interface Item_UpdateObject {
    /*the object being updated*/
    ObjectId: string;
    /*updated model data*/
    ObjectDesc: string;
    /*updated physics data*/
    PhysicsDesc: string;
    /*updated game data*/
    WeenieDesc: string;
}
/*Account has been booted*/
interface Login_AccountBooted {
    AdditionalReasonText: string;
    ReasonText: string;
}
/*Send or receive a message using Turbine Chat.*/
interface Communication_TurbineChat {
    /*the number of bytes that follow after this DWORD*/
    MessageSize: string;
    /*the type of data contained in this message*/
    Type: string;
    BlobDispatchType: string;
    TargetType: string;
    TargetId: string;
    TransportType: string;
    TransportId: string;
    Cookie: string;
    /*the number of bytes that follow after this DWORD*/
    PayloadSize: string;
    /*the channel number of the message*/
    RoomId: string;
    /*the name of the player sending the message*/
    DisplayName: string;
    /*the message text*/
    Text: string;
    /*the number of bytes that follow after this DWORD*/
    ExtraDataSize: string;
    /*the object Id of the player sending the message*/
    SpeakerId: string;
    HResult: string;
    ChatType: string;
    ContextId: string;
    ResponseId: string;
    MethodId: string;
    /*the channel number of the message*/
    RoomId: string;
    /*the message text*/
    Text: string;
    /*the number of bytes that follow after this DWORD*/
    ExtraDataSize: string;
    /*the object Id of the player sending the message (should be you)*/
    SpeakerId: string;
    HResult: string;
    ChatType: string;
    ContextId: string;
    /*Type of response, should be 1 here*/
    ResponseId: string;
    /*Type of request, should be 1 here*/
    MethodId: string;
    HResult: string;
    ContextId: string;
    /*Type of response, should be 2 here*/
    ResponseId: string;
    /*Type of request, should be 2 here*/
    MethodId: string;
    HResult: string;
}
/*Switch from the character display to the game display.*/
interface Login_EnterGame_ServerReady {
}
/*Display a message in the chat window.*/
interface Communication_TextboxString {
    /*the message text*/
    Text: string;
    /*the message type, controls color and @filter processing*/
    Type: string;
}
/*The name of the current world.*/
interface Login_WorldInfo {
    /*the number of players connected*/
    Connections: string;
    /*the max number of players allowed to connect*/
    MaxConnections: string;
    /*the name of the current world*/
    WorldName: string;
}
/*Add or update a dat file Resource.*/
interface DDD_DataMessage {
    /*which dat file should store this resource*/
    DatFile: string;
    /*the resource type*/
    ResourceType: string;
    /*the resource Id number*/
    ResourceId: string;
    /*the file version number*/
    Iteration: string;
    /*the type of compression used*/
    Compression: string;
    /*version of some sort*/
    Version: string;
    /*the number of bytes required for the remainder of this message, including this DWORD*/
    DataSize: string;
    /*the size of the uncompressed file*/
    FileSize: string;
}
/*DDD error*/
interface DDD_ErrorMessage {
    /*the resource type*/
    ResourceType: string;
    /*the resource Id number*/
    ResourceId: string;
    RError: string;
}
/*A list of dat files that need to be patched*/
interface DDD_BeginDDDMessage {
    /*Amount of data expected*/
    DataExpected: string;
    Revisions: string;
}
/*Add or update a dat file Resource.*/
interface DDD_InterrogationMessage {
    ServersRegion: string;
    NameRuleLanguage: string;
    ProductId: string;
    SupportedLanguages: string;
}
/*Ends DDD update*/
interface DDD_OnEndDDD {
}
/*Client to Server AC packet.*/
interface C2SPacket {
    /*Packet Sequence / Order*/
    Sequence: string;
    /*Flags that dictate the content / purpose of this packet*/
    Flags: string;
    /*Packet Checksum*/
    Checksum: string;
    RecipientId: string;
    TimeSinceLastPacket: string;
    /*Packet length, excluding this header*/
    Size: string;
    Iteration: string;
    /*Only valid if packet header has ServerSwitch flag*/
    ServerSwitch: string;
    /*A list of sequences that are being requested to be retransmitted. Only valid if packet header has RequestRetransmit flag.*/
    RetransmitSequences: string;
    /*Only valid if packet header has RejectRetransmit flag*/
    RejectSequences: string;
    /*Only valid if packet header has AckSequence flag*/
    AckSequence: string;
    /*Only valid if packet header has LoginRequest flag*/
    LoginRequest: string;
    /*Only valid if packet header has WorldLoginRequest flag*/
    WorldLoginRequest: string;
    /*Only valid if packet header has ConnectResponse flag*/
    ConnectResponse: string;
    /*Only valid if packet header has CICMDCommand flag*/
    CICMDCommand: string;
    /*Only valid if packet header has TimeSync flag*/
    Time: string;
    /*Only valid if packet header has EchoRequest flag*/
    EchoTime: string;
    /*Only valid if packet header has Flow flag*/
    Flow: string;
    /*Used to contruct messages from potentially multple fragments. Only valid if packet header has BlobFragments flag*/
    Fragments: string;
}
/*Server to Client AC packet.*/
interface S2CPacket {
    /*Packet Sequence / Order*/
    Sequence: string;
    /*Flags that dictate the content / purpose of this packet*/
    Flags: string;
    /*Packet Checksum*/
    Checksum: string;
    RecipientId: string;
    TimeSinceLastPacket: string;
    /*Packet length, excluding this header*/
    Size: string;
    Iteration: string;
    /*Only valid if packet header has AckSequence flag*/
    AckSequence: string;
    /*Optional header data when PacketHeaderFlags includes LogonServerAddr*/
    LogonServerAddr: string;
    /*Optional header data when PacketHeaderFlags includes Referral*/
    Referral: string;
    /*Optional header data when PacketHeaderFlags includes ConnectRequest*/
    ConnectRequest: string;
    /*Optional header data when PacketHeaderFlags includes NetError*/
    NetError: string;
    /*Optional header data when PacketHeaderFlags includes NetErrorDisconnect*/
    NetErrorDisconnect: string;
    /*Optional header data when PacketHeaderFlags includes EchoResponse*/
    EchoResponse: string;
    /*Used to contruct messages from potentially multple fragments. Only valid if packet header has BlobFragments flag*/
    Fragments: string;
}
