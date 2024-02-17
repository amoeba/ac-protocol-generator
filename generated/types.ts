export type WString = string;

export type WORD = number;

export type DWORD = number;

export type PackedWORD = number;

export type PackedDWORD = number;

export type ObjectId = number;

export type LandcellId = number;

export type SpellId = number;

export type DataId = PackedDWORD;

/*Full spell Id combining the spell id with the spell layer.*/
export interface LayeredSpellId {
    /*Id of the spell*/
    Id: string;
    /*Layer of the spell, seperating multiple instances of the same spell*/
    Layer: string;
}

/*List which is packable for network*/
export interface PackableList {
    /*Number of items in the list*/
    Count: string;
}

/*HashTable which is packable for network*/
export interface PackableHashTable {
    /*number of items in the table*/
    Count: string;
    /*max size of the table*/
    MaxSize: string;
}

/*HashTable which is packable for network*/
export interface PHashTable {
    PackedSize: string;
}

export interface Vector3 {
    X: string;
    Y: string;
    Z: string;
}

export interface Quaternion {
    W: string;
    X: string;
    Y: string;
    Z: string;
}

/*Landcell location, without orientation*/
export interface Origin {
    /*the landcell in which the object is located*/
    Landcell: string;
    /*the location in the landcell for the object*/
    Location: string;
}

/*Landcell location, including orientation*/
export interface Position {
    /*the landcell in which the object is located*/
    Landcell: string;
    /*the location and orientation in the landcell*/
    Frame: string;
}

/*A the location and orientation of an object within a landcell*/
export interface Frame {
    /*the location in a landcell in which the object is located*/
    Origin: string;
    /*a quaternion describing the object's orientation*/
    Orientation: string;
}

/*Optional header data when PacketHeaderFlags includes ServerSwitch*/
export interface ServerSwitchHeader {
    Sequence: string;
    Type: string;
}

/*Optional header data when PacketHeaderFlags includes CICMDCommand*/
export interface CICMDCommandHeader {
    Command: string;
    Parameter: string;
}

/*Optional header data when PacketHeaderFlags includes Flow*/
export interface FlowHeader {
    Bytes: string;
    Interval: string;
}

/*Optional header data when PacketHeaderFlags includes LogonServerAddr*/
export interface SocketAddress {
    Family: string;
    Port: string;
    Address: string;
    Empty: string;
}

/*Optional header data when PacketHeaderFlags includes LoginRequest*/
export interface LoginRequestHeader {
    ClientVersion: string;
    Length: string;
    AuthType: string;
    Flags: string;
    Sequence: string;
    /*The name of the account that is authenticating.*/
    Account: string;
    /*The name of the account to login as (admin only).*/
    AccountToLoginAs: string;
}

/*Optional header data when PacketHeaderFlags includes Referral*/
export interface ReferralHeader {
    Cookie: string;
    Address: string;
    IdServer: string;
    Unknown: string;
}

/*Optional header data when PacketHeaderFlags includes ConnectRequest*/
export interface ConnectRequestHeader {
    ServerTime: string;
    Cookie: string;
    NetID: string;
    OutgoingSeed: string;
    IncomingSeed: string;
    Unknown: string;
}

export interface NetError {
    StringId: string;
    TableId: string;
}

export interface EchoResponseHeader {
    LocalTime: string;
    HoldingTime: string;
}

/*A collection of property tables.*/
export interface ACBaseQualities {
    /*determines which property types appear in the message*/
    Flags: string;
    /*Expect it always should be 0xA*/
    WeenieType: string;
}

/*The ACQualities structure contains character property lists.*/
export interface ACQualities {
    /*determines which property vector types appear in the message*/
    Flags: string;
    /*seems to indicate this object has health attribute*/
    HasHealth: string;
}

/*The AttributeCache structure contains information about a character attributes.*/
export interface AttributeCache {
    /*The attributes included in the character description - this is always 0x1FF*/
    Flags: string;
}

/*The Attribute structure contains information about a character attribute.*/
export interface AttributeInfo {
    /*points raised*/
    PointsRaised: string;
    /*innate points*/
    InnatePoints: string;
    /*XP spent on this attribute*/
    ExperienceSpent: string;
}

/*The SecondaryAttribute structure contains information about a character vital.*/
export interface SecondaryAttributeInfo {
    /*secondary attribute's data*/
    Attribute: string;
    /*current value of the vital*/
    Current: string;
}

/*The Skill structure contains information about a character skill.*/
export interface Skill {
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
export interface Body {
    BodyParts: string;
}

/*Information on individual body parts. (Needs to be confirmed if this was used in prod)*/
export interface BodyPart {
    HasBPSD: string;
    DamageType: string;
    DamageVal: string;
    DamageVar: string;
    /*Armor info*/
    ArmorCache: string;
    BH: string;
}

/*Information on armor levels*/
export interface ArmorCache {
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

export interface BodyPartSelectionData {
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
export interface SpellBookPage {
    /*Final value has 2.0 subtracted if network value > 2.0.  Believe this is the charge of the spell which was unused later*/
    CastingLikelihood: string;
}

/*Contains information related to the spells in effect on the character*/
export interface EnchantmentRegistry {
    /*Flags that determine what data is contained in the EnchantmentRegistry*/
    Flags: string;
}

/*The Enchantment structure describes an active enchantment.*/
export interface Enchantment {
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
}

/*Information on stat modification*/
export interface StatMod {
    /*flags that indicate the type of effect the spell has*/
    Type: string;
    /*along with flags, indicates which attribute is affected by the spell*/
    Key: string;
    /*the effect value/amount*/
    Value: string;
}

/*Contains a list of events to filter? Unknown what this does currently.*/
export interface EventFilter {
    /*List of events*/
    Events: string;
}

/*Contains a list of emotes for NPCs? Unknown what this does currently.*/
export interface EmoteTable {
    /*Key may be an EmoteCategory?*/
    Emotes: string;
}

export interface EmoteSetList {
    /*List of emote sets*/
    Emotes: string;
}

export interface EmoteSet {
    Category: string;
    Probability: string;
    /*List of emotes*/
    Emotes: string;
}

export interface Emote {
    Type: string;
    Delay: string;
    Extent: string;
}

/*Set information about an item for creation*/
export interface CreationProfile {
    WeenieClassId: string;
    Palette: string;
    Shade: string;
    Destination: string;
    StackSize: string;
    TryToBond: string;
}

/*List of pages in a book*/
export interface PageDataList {
    MaxNumPages: string;
    MaxNumCharsPerPage: string;
    /*List of pages*/
    Pages: string;
}

/*Data for an individual page*/
export interface PageData {
    AuthorId: string;
    AuthorName: string;
    AuthorAccount: string;
    /*if HIWORD is not 0xFFFF, this is textIncluded. For our purpose this should always be 0xFFFF0002*/
    Version: string;
    TextIncluded: string;
    IgnoreAuthor: string;
}

/*Blob fragment data used to contruct message data. These can be spread across multiple packets*/
export interface BlobFragments {
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

export interface GeneratorTable {
    /*List of generator profiles*/
    Generators: string;
}

export interface GeneratorProfile {
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

export interface GeneratorRegistry {
    Registry: string;
}

export interface GeneratorRegistryNode {
    WcidOrType: string;
    Ts: string;
    TreasureType: string;
    Slot: string;
    Checkpointed: string;
    Shop: string;
    Amount: string;
}

/*Set of inventory items*/
export interface GeneratorQueue {
    Queue: string;
}

export interface GeneratorQueueNode {
    Slot: string;
    When: string;
}

export interface WindowProperty {
    Key_a: string;
}

export interface WindowOption {
    Type_a: string;
}

export interface OptionProperty {
    Type: string;
}

export interface GameplayOptions {
    /*The size in bytes of the GameplayOptions payload that follows*/
    Size: string;
    Unknown200_2: string;
    OptionPropertyCount: string;
}

/*The PlayerModule structure contains character options.*/
export interface PlayerModule {
    Flags: string;
    Options: string;
    Tab1Spells: string;
    Tab2Spells: string;
    Tab3Spells: string;
    Tab4Spells: string;
    Tab5Spells: string;
    Tab6Spells: string;
    Tab7Spells: string;
    Tab8Spells: string;
}

/*Set of shortcuts*/
export interface ShortCutManager {
    /*List of short cuts.*/
    Shortcuts: string;
}

/*Shortcut*/
export interface ShortCutData {
    /*Position*/
    Index: string;
    /*Object Id*/
    ObjectId: string;
    /*May not have been used in prod?  Maybe a remnet of before spell tabs?  I don't think you could put spells in shortcut spot...*/
    SpellId: string;
}

/*List of spells in spell tab*/
export interface SpellTab {
    /*List of spells on tab.*/
    Spells: string;
}

/*Set of inventory items*/
export interface ContentProfile {
    ObjectId: string;
    /*Whether or not this object is a container.*/
    ContainerType: string;
}

/*Set of inventory items*/
export interface InventoryPlacement {
    ObjectId: string;
    Location: string;
    Priority: string;
}

/*Allegience information*/
export interface AllegianceProfile {
    /*The number of allegiance members.*/
    TotalMembers: string;
    /*Your personal number of followers.*/
    TotalVassals: string;
    Hierarchy: string;
}

/*Allegience record*/
export interface AllegianceRecord {
    /*The Object Id for the parent character to this character.  Used by the client to decide how to build the display in the Allegiance tab. 1 is the monarch.*/
    TreeParent: string;
    AllegianceData: string;
}

/*Allegience hierarchy information*/
export interface AllegianceHierarchy {
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
}

/*Set of allegiance data for a specific player*/
export interface AllegianceData {
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
    /*Character loyalty.*/
    Loyalty: string;
    /*Character leadership.*/
    Leadership: string;
    Name: string;
}

export interface FriendData {
    FriendId: string;
    Online: string;
    AppearOffline: string;
    Name: string;
    OutFriends: string;
    InFriends: string;
}

/*Data related to an item, namely the amount and description*/
export interface ItemProfile {
    PackedAmount: string;
    /*the object Id of the item*/
    ObjectId: string;
}

/*The PublicWeenieDesc structure defines an object's game behavior.*/
export interface PublicWeenieDesc {
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
}

/*The RestrictionDB contains the access control list for a dwelling object.*/
export interface RestrictionDB {
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
export interface OldPublicWeenieDesc {
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
}

/*Information related to a secure trade.*/
export interface Trade {
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
export interface JumpPack {
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
export interface MoveToStatePack {
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

export interface PackedMotionCommand {
    /*Command Id*/
    CommandId: string;
    /*Sequence of the animation.*/
    PackedSequence: string;
    /*Command speed*/
    Speed: string;
}

/*Data related to the movement of the object sent from a client*/
export interface RawMotionState {
    /*Command Id*/
    Flags: string;
}

/*An autonomous position with sequences*/
export interface AutonomousPositionPack {
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
export interface PositionPack {
    Flags: string;
    /*the location of the object in the world*/
    Origin: string;
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
export interface MovementData {
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
}

/*Contains information for animations and general free motion*/
export interface InterpertedMotionState {
    Flags: string;
}

export interface DDDRevision {
    /*Dat File header offset 0x0150, Dat File header offset 0x014C*/
    IdDatFile: string;
    /*The corresponding Dat file revision for this patch set*/
    Iteration: string;
    IdsToDownload: string;
    IdsToPurge: string;
}

/*Set of movement parameters required for a MoveTo movement*/
export interface MoveToMovementParameters {
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
export interface TurnToMovementParameters {
    /*bitmember of some options related to the motion (TODO needs further research)*/
    Bitmember: string;
    /*speed of animation*/
    AnimationSpeed: string;
    /*Heading the object is turning to*/
    DesiredHeading: string;
}

/*The ObjDesc structure defines an object's visual appearance.*/
export interface ObjDesc {
    /*always 0x11*/
    Version: string;
    /*the number of palettes associated with this object*/
    PaletteCount: string;
    /*the number of textures associated with this object*/
    TextureCount: string;
    /*the number of models associated with this object*/
    ModelCount: string;
}

/*Contains data for a subpalette*/
export interface Subpalette {
    /*palette DataId (minus 0x04000000)*/
    Palette: string;
    /*The number of palette entries to skip*/
    Offset: string;
    /*The number of palette entries to copy. This is multiplied by 8.  If it is 0, it defaults to 256*8.*/
    NumColors: string;
}

/*Contains data for texture map changes*/
export interface TextureMapChange {
    /*the index of the model we are replacing the texture in*/
    PartIndex: string;
    /*texture DataId (minus 0x05000000)*/
    OldTexId: string;
    /*texture DataId (minus 0x05000000)*/
    NewTexId: string;
}

/*Contains data for animation part changes*/
export interface AnimPartChange {
    /*The index of the model*/
    PartIndex: string;
    /*model DataId (minus 0x01000000)*/
    PartId: string;
}

/*Data for a character creation*/
export interface CharGenResult {
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
export interface CharacterIdentity {
    /*The character Id for this entry.*/
    CharacterId: string;
    /*The name of this character.*/
    Name: string;
    /*When 0, this character is not being deleted (not shown crossed out). Otherwise, it's a countdown timer in the number of seconds until the character is submitted for deletion.*/
    SecondsGreyedOut: string;
}

export interface EquipLocation {
    ObjectId: string;
    /*the slot in which this object is equipped, referenced in the Setup table of the dats*/
    Slot: string;
}

/*The PhysicsDesc structure defines an object's physical behavior.*/
export interface PhysicsDesc {
    /*physics data flags*/
    Flags: string;
    /*The current physics state for the object*/
    State: string;
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

export interface AdminAccountData {
    AccountName: string;
    BookieId: string;
}

export interface AdminPlayerData {
    name: string;
    bookieId: string;
}

export interface VendorProfile {
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

export interface ArmorProfile {
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

export interface CreatureAppraisalProfile {
    /*These Flags indication which members will be available for assess.*/
    Flags: string;
    /*current health*/
    Health: string;
    /*maximum health*/
    HealthMax: string;
}

export interface WeaponProfile {
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

export interface HookAppraisalProfile {
    Flags: string;
    ValidLocations: string;
    AmmoType: string;
}

export interface SquelchDB {
    /*Account name and */
    AccountHash: string;
    CharacterHash: string;
    /*Global squelch information*/
    GlobalInfo: string;
}

/*Set of information related to a squelch entry*/
export interface SquelchInfo {
    Filters: string;
    /*the name of the squelched player*/
    Name: string;
    /*Whether this squelch applies to the entire account*/
    Account: string;
}

/*Set of information related to purchasing a housing*/
export interface HouseProfile {
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
export interface HousePayment {
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
export interface HouseData {
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
export interface HAR {
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
export interface GuestInfo {
    /*0 is just access to house, 1 = access to storage*/
    HasStoragePermission: string;
    /*Name of the guest*/
    GuestName: string;
}

/*Set of information related to a chess game move*/
export interface GameMoveData {
    /*Type of move*/
    Type: string;
    /*Player making the move*/
    PlayerId: string;
    /*Team making this move*/
    Team: string;
}

/*Set of information related to a salvage operation*/
export interface SalvageOperationsResultData {
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
export interface SalvageResult {
    Material: string;
    Workmanship: string;
    Units: string;
}

export interface FellowshipLockData {
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
export interface Fellowship {
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
export interface Fellow {
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
export interface ContractTracker {
    Version: string;
    ContractId: string;
    ContractStage: string;
    TimeWhenDone: string;
    TimeWhenRepeats: string;
}

/*Contains table of ContractTrackers*/
export interface ContractTrackerTable {
    /*Set of contract trackers  with the contractId as the key and some additional info for them*/
    ContactTrackers: string;
}