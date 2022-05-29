/** @internal */
export type Get = <T>(path: string) => Promise<T>;
/** @internal */
export type Post = <T>(path: string, data: any) => Promise<T>;

// https://transform.tools/json-to-typescript
export interface Asset {
  account_id: string;
  asset_type: string;
  archive_from: string;
  bundle: boolean;
  bundle_view: string;
  cover_asset_id: string;
  creator: Creator;
  frames: number;
  hard_deleted_at: string;
  id: string;
  index: number;
  is_bundle_child: boolean;
  is_hls_required: boolean;
  is_session_watermarked: boolean;
  item_count: number;
  label: string;
  metadata: Metadata;
  metadata_flags: MetadataFlags;
  name: string;
  original: string;
  project_id: string;
  properties: Properties;
  required_transcodes: RequiredTranscodes;
  team_id: string;
  user_permissions: UserPermissions;
  type: string;
  view_count: number;
}

export interface Creator {
  digest_frequency: string;
  features_seen: any;
  profile_image_original: any;
  image_32: string;
  image_128: string;
  from_google: boolean;
  mfa_enforced_at: string;
  email: string;
  bio: any;
  name: string;
  image_64: string;
  timezone_value: string;
  account_id: string;
  updated_at: string;
  image_256: string;
  _type: string;
  user_hash: string;
  context: any;
  upload_url: string;
  location: any;
  phone: any;
  deleted_at: any;
  profile_image: string;
  first_login_at: string;
  joined_via: string;
  email_confirm_by: any;
  id: string;
  next_digest_date: string;
  email_preferences: any;
  last_seen: string;
  inserted_at: string;
  roles: Roles;
  user_default_color: string;
}

export interface Roles {
  admin: boolean;
  id: string;
  sales: boolean;
  support: boolean;
}

export interface Metadata {}

export interface MetadataFlags {
  id: string;
  is_360: boolean;
  is_hdr: boolean;
  is_original_player_compatible: boolean;
}

export interface Properties {
  "": string;
}

export interface RequiredTranscodes {
  cover: boolean;
  finalized: string[];
  h264_1080_best: boolean;
  h264_2160: boolean;
  h264_360: boolean;
  h264_540: boolean;
  h264_720: boolean;
  image_full: boolean;
  image_high: boolean;
  page_proxy: boolean;
  thumb: boolean;
  thumb_540: boolean;
  thumb_orig_ar_540: boolean;
  thumb_scrub: boolean;
}

export interface UserPermissions {
  can_download: boolean;
  can_modify_template: boolean;
  can_public_share_presentation: boolean;
  can_public_share_review_link: boolean;
  can_share_downloadable_presentation: boolean;
  can_share_downloadable_review_link: boolean;
  can_share_unwatermarked_presentation: boolean;
  can_share_unwatermarked_review_link: boolean;
}

export interface Account {
  invoice_emails: string[];
  city: string;
  account_default_color: string;
  company_name: string;
  storage: number;
  file_count: number;
  owner: Owner;
  upload_url: string;
  deleted_at: string;
  line1: string;
  postal_code: string;
  vat: string;
  company_address: string;
  lifetime_file_count: number;
  state: string;
  teams: Team[];
  image_64: string;
  archived_storage: number;
  image_128: string;
  owner_id: string;
  user_count: number;
  locked_at: string;
  image: string;
  team_count: number;
  collaborator_role_count: number;
  billing_emails: string;
  image_32: string;
  unpaid_at: string;
  inserted_at: string;
  updated_at: string;
  project_count: number;
  duration: number;
  delinquent_at: string;
  collaborator_count: number;
  plan: Plan;
  watermark: Watermark;
  folder_count: number;
  id: string;
  display_name: string;
  country: string;
  subscription: Subscription;
  account_members: AccountMember[];
  frames: number;
  member_count: number;
  image_256: string;
}

export interface Owner {
  digest_frequency: string;
  features_seen: any;
  profile_image_original: any;
  image_32: string;
  image_128: string;
  from_google: boolean;
  mfa_enforced_at: string;
  email: string;
  bio: any;
  name: string;
  image_64: string;
  timezone_value: string;
  account_id: string;
  updated_at: string;
  image_256: string;
  _type: string;
  user_hash: string;
  context: any;
  upload_url: string;
  location: any;
  phone: any;
  deleted_at: any;
  profile_image: string;
  first_login_at: string;
  joined_via: string;
  email_confirm_by: any;
  id: string;
  next_digest_date: string;
  email_preferences: any;
  last_seen: string;
  inserted_at: string;
  roles: Roles;
  user_default_color: string;
}

export interface Roles {
  admin: boolean;
  id: string;
  sales: boolean;
  support: boolean;
}

export interface Team {
  account_id: string;
  disable_sbwm_internally: boolean;
  creator_id: string;
  storage: number;
  default_font_color: string;
  access: string;
  font_color: string;
  user_role: UserRole;
  file_count: number;
  default_session_watermark_template: DefaultSessionWatermarkTemplate;
  link: string;
  asset_lifecycle_policy: number;
  upload_url: string;
  admin_only_actions: AdminOnlyActions;
  deleted_at: string;
  default_background_color: string;
  storage_limit: number;
  location: string;
  name: string;
  default_color: string;
  slack_webhook: SlackWebhook;
  image_64: string;
  archived_storage: number;
  image_128: string;
  solo: boolean;
  account: Account;
  image_32: string;
  inserted_at: string;
  updated_at: string;
  project_count: number;
  duration: number;
  team_image: string;
  collaborator_count: number;
  bio: string;
  watermark: Watermark;
  color: string;
  email_branding: EmailBranding;
  folder_count: number;
  dark_theme: boolean;
  default_session_watermark_template_id: string;
  session_watermark_templates: SessionWatermarkTemplate[];
  id: string;
  member_limit: number;
  frames: number;
  member_count: number;
  image_256: string;
  background_color: string;
}

export interface UserRole {}

export interface DefaultSessionWatermarkTemplate {
  account_id: string;
  app_default: boolean;
  creator_id: string;
  id: string;
  name: string;
  watermark_blocks: WatermarkBlock[];
}

export interface WatermarkBlock {
  alpha: number;
  data_points: DataPoint[];
  font_size: string;
  name: string;
  position: string;
  position_reference_point: string;
  position_x: number;
  position_y: number;
  scroll_text: string;
  text_alignment: string;
  text_color: string;
  text_shadow: boolean;
}

export interface DataPoint {}

export interface AdminOnlyActions {
  lifecycle: boolean;
}

export interface SlackWebhook {}

export interface Account {}

export interface Watermark {
  image: Image;
  text: Text;
}

export interface Image {
  alpha: number;
  image: UploadedImage;
  position: string;
}

export interface UploadedImage {
  bucket: string;
  key: string;
  type: string;
  uploaded: boolean;
}

export interface Text {
  alpha: number;
  lines: string[];
  position: string;
}

export interface EmailBranding {
  accent_color: string;
  background_color: string;
  image: UploadedImage;
}

export interface SessionWatermarkTemplate {
  account_id: string;
  app_default: boolean;
  creator_id: string;
  id: string;
  name: string;
  watermark_blocks: WatermarkBlock[];
}

export interface WatermarkBlock {
  alpha: number;
  data_points: DataPoint[];
  font_size: string;
  name: string;
  position: string;
  position_reference_point: string;
  position_x: number;
  position_y: number;
  scroll_text: string;
  text_alignment: string;
  text_color: string;
  text_shadow: boolean;
}

export interface Plan {
  archived_storage_limit: number;
  autoscaling: boolean;
  available_features: AvailableFeatures;
  collaborator_limit: number;
  cost: number;
  default_plan: boolean;
  deleted_at: string;
  enterprise: boolean;
  file_limit: number;
  id: string;
  inserted_at: string;
  lifetime_file_limit: number;
  member_limit: number;
  name: string;
  payment_method: string;
  period: string;
  project_limit: number;
  storage_limit: number;
  team_limit: number;
  tier: string;
  title: string;
  updated_at: string;
  user_limit: number;
  user_max: number;
  version: number;
}

export interface AvailableFeatures {
  archival_storage: boolean;
  custom_branded_emails: boolean;
  custom_branded_presentations: boolean;
  reel_player: boolean;
  secure_sharing: boolean;
  session_based_watermarking: boolean;
  team_only_comments: boolean;
}

export interface Subscription {
  account_id: string;
  archived_storage_limit: number;
  balance: number;
  cancellation_option: string;
  cancellation_reason: string;
  cancelled_at: string;
  deleted_at: string;
  id: string;
  inserted_at: string;
  last_payment_at: string;
  member_limit: number;
  next_bill_at: string;
  on_trial: boolean;
  plan: Plan;
  plan_id: string;
  promotion_expires_at: string;
  promotion_id: string;
  requires_autoscaling: boolean;
  storage_limit: number;
  subscription_end_at: string;
  total_archived_storage_limit: number;
  total_lifetime_file_limit: number;
  total_member_limit: number;
  total_project_limit: number;
  total_storage_limit: number;
  total_user_limit: number;
  updated_at: string;
  user_limit: number;
}

export interface Plan {
  archived_storage_limit: number;
  autoscaling: boolean;
  available_features: AvailableFeatures;
  collaborator_limit: number;
  cost: number;
  default_plan: boolean;
  deleted_at: string;
  enterprise: boolean;
  file_limit: number;
  id: string;
  inserted_at: string;
  lifetime_file_limit: number;
  member_limit: number;
  name: string;
  payment_method: string;
  period: string;
  project_limit: number;
  storage_limit: number;
  team_limit: number;
  tier: string;
  title: string;
  updated_at: string;
  user_limit: number;
  user_max: number;
  version: number;
}

export interface AccountMember {
  accepted_at: string;
  account_id: string;
  declined_at: string;
  deleted_at: string;
  inserted_at: string;
  role: string;
  updated_at: string;
  user_id: string;
}

export interface Comment {
  annotation: string;
  completed: boolean;
  completed_at: string;
  completer_id: string;
  has_replies: boolean;
  id: string;
  like_count: number;
  owner: Owner;
  owner_id: string;
  text: string;
  timestamp: number;
}

export interface Owner {
  account_id: string;
  email: string;
  id: string;
  name: string;
}
