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