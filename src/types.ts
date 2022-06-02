/** @internal */
export type Get = <T>(path: string) => Promise<T>;
/** @internal */
export type Post = <T>(path: string, data: any) => Promise<T>;
/** @internal */
export type Put = <T>(path: string, data: any) => Promise<T>;

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

export interface StreamAsset {
  cover: string;
  parent_id: string;
  properties: any;
  h265_hdr_2160: any;
  h264_2160: string;
  includes: string[];
  image_high: any;
  image_small: string;
  uploaded_at: string;
  downloads: Downloads;
  asset_type: string;
  frame_custom: any;
  description: any;
  label: string;
  original: string;
  drm: any;
  h264_540: string;
  fps: number;
  id: string;
  source: any;
  thumb_orig_ar_540: string;
  autoversion_id: any;
  is_hls_required: boolean;
  h264_720: string;
  h265_hdr_360: any;
  archive_status: any;
  project: Project;
  page_high: any;
  page_small: any;
  transcoded_at: string;
  name: string;
  required_transcodes: string[];
  cover_asset_id: any;
  deleted_at: any;
  transcode_statuses: TranscodeStatuses;
  transcodes: Transcodes;
  page_full: any;
  is_360: boolean;
  creator: Creator;
  item_count: number;
  shared: boolean;
  subtitle_tracks: any;
  allow_original_playback: boolean;
  view_count: number;
  resource_id: any;
  status: string;
  thumb_540: string;
  upload_failed_at: any;
  private: boolean;
  h264_1080_best: string;
  video_h264_180: string;
  frame_cover: any;
  project_id: string;
  h265_hdr_540: any;
  user_permissions: UserPermissions;
  page_thumb: any;
  rating: any;
  webm_1080_best: any;
  type: string;
  frame_thumb: any;
  metadata: Metadata;
  archived_at: any;
  public_item_count: number;
  webm_540: any;
  webm_720: any;
  copy: boolean;
  versions: number;
  h265_hdr_720: any;
  image_full: string;
  creator_id: string;
  checksums: Checksums;
  _type: string;
  filetype: string;
  index: number;
  waveform: any;
  thumb_scrub: string;
  thumb: string;
  h264_360: string;
  h265_hdr_1080: any;
  frames: number;
  hard_deleted_at: any;
  is_session_watermarked: boolean;
  audio_tracks: any;
  timecode: string;
  comment_count: number;
  upload_completed_at: string;
  webm_360: any;
  filesize: number;
  duration: number;
  account_id: string;
  archive_scheduled_at: any;
  updated_at: string;
  hls_manifest: string;
  archive_from: string;
  team_id: string;
  inserted_at: string;
  metadata_flags: MetadataFlags;
}

export interface Downloads {
  h264_1080_best: string;
  h264_2160: string;
  h264_360: string;
  h264_540: string;
  h264_720: string;
  image_full: string;
  image_high: any;
  image_small: string;
}

export interface Project {
  _type: string;
  archive_status: string;
  archived_at: any;
  archived_file_count: number;
  archived_storage: number;
  collaborator_count: number;
  deleted_at: any;
  description: any;
  file_count: number;
  folder_count: number;
  id: string;
  ignore_archive: boolean;
  inserted_at: string;
  invite_url: any;
  name: string;
  owner_id: string;
  private: boolean;
  read_only: boolean;
  resource_id: any;
  root_asset_id: string;
  shared: boolean;
  storage: number;
  team_id: string;
  updated_at: string;
  user_permissions: UserPermissions;
}

export interface UserPermissions {
  can_download: boolean;
  can_manage_devices: boolean;
  can_modify_template: boolean;
  can_public_share_presentation: boolean;
  can_public_share_review_link: boolean;
  can_share_downloadable_presentation: boolean;
  can_share_downloadable_review_link: boolean;
  can_share_unwatermarked_presentation: boolean;
  can_share_unwatermarked_review_link: boolean;
  can_view_devices: boolean;
}

export interface TranscodeStatuses {
  cover: Image;
  h264_1080_best: Video;
  h264_2160: Video;
  h264_360: Video;
  h264_540: Video;
  h264_720: Video;
  image_full: Image;
  image_small: Image;
  thumb: Image;
  thumb_540: Image;
  thumb_orig_ar_540: Image;
  thumb_scrub: Image;
  video_h264_180: Video;
}

export interface Video {
  codec: string;
  duration: number;
  encode_status: string;
  encode_time: number;
  error: any;
  filesize: number;
  fps: any;
  height: number;
  language: string;
  num_channels: number;
  num_frames: any;
  storage_class: string;
  watermark: Watermark;
  width: number;
}

// export interface Watermark {
//   image: boolean;
//   text: boolean;
// }

export interface Image {
  codec: any;
  duration: any;
  encode_status: string;
  encode_time: any;
  error: any;
  filesize: number;
  fps: any;
  height: any;
  language: any;
  num_channels: any;
  num_frames: any;
  storage_class: string;
  watermark: Watermark;
  width: any;
}

export interface Transcodes {
  _type: string;
  codec: string;
  id: string;
  original_height: number;
  original_width: number;
  resolutions: number[];
  thumb_height: number;
  thumb_state: string;
  thumb_width: number;
  thumbs: number;
  total_audio_tracks: any;
}

// export interface Creator {
//   next_digest_date: string;
//   email_confirm_by: any;
//   last_seen: string;
//   from_google: boolean;
//   digest_frequency: string;
//   id: string;
//   email: string;
//   mfa_enforced_at: any;
//   name: string;
//   profile_image: string;
//   deleted_at: any;
//   phone: any;
//   image_32: any;
//   bio: any;
//   joined_via: string;
//   context: any;
//   from_adobe: boolean;
//   roles: any;
//   highest_account_role: any;
//   email_preferences: any;
//   upload_url: any;
//   image_128: any;
//   features_seen: any;
//   _type: string;
//   first_login_at: string;
//   image_64: any;
//   image_256: any;
//   user_default_color: string;
//   profile_image_original: any;
//   account_id: string;
//   updated_at: string;
//   location: any;
//   timezone_value: string;
//   inserted_at: string;
// }

export interface Metadata {
  _type: string;
  asset_id: string;
  blob: Blob;
  ffprobe_metadata: string;
  id: string;
  source_timecode: string;
  timecode: string;
}

export interface Blob {
  asset: Asset;
  audio_codec: string;
  codec: string;
  duration: string;
  format: Format;
  format_name: string;
  fps: number;
  frames: string;
  has_audio: string;
  height: number;
  interlaced: boolean;
  is_audio: string;
  is_hdr: boolean;
  is_image: string;
  is_video: string;
  streams: Stream[];
  timecode: string;
  video_codec: string;
  width: number;
}

export interface Asset {
  id: string;
  storage: Storage;
}

export interface Storage {
  bucket: string;
  etag: string;
  key: string;
  provider: string;
  size: number;
  uploaded_at: number;
}

export interface Format {
  bit_rate: string;
  duration: string;
  format_long_name: string;
  format_name: string;
  nb_programs: number;
  nb_streams: number;
  probe_score: number;
  size: string;
  start_time: string;
  tags: Tags;
}

export interface Tags {
  compatible_brands: string;
  creation_time: string;
  major_brand: string;
  make: string;
  "make-eng": string;
  minor_version: string;
  model: string;
  "model-eng": string;
  timecode: string;
}

export interface Stream {
  pix_fmt?: string;
  bit_rate: string;
  disposition: Disposition;
  codec_name?: string;
  bits_per_raw_sample?: string;
  nal_length_size?: string;
  time_base: string;
  has_b_frames?: number;
  coded_height?: number;
  is_avc?: string;
  level?: number;
  duration: string;
  duration_ts: number;
  refs?: number;
  codec_time_base?: string;
  start_time: string;
  color_primaries?: string;
  coded_width?: number;
  tags: Tags;
  r_frame_rate: string;
  codec_tag_string: string;
  color_range?: string;
  index: number;
  start_pts: number;
  codec_tag: string;
  nb_frames: string;
  nb_read_frames?: string;
  color_transfer?: string;
  avg_frame_rate: string;
  color_space?: string;
  height?: number;
  codec_type: string;
  width?: number;
  chroma_location?: string;
  codec_long_name?: string;
  closed_captions?: number;
  profile?: string;
  bits_per_sample?: number;
  channels?: number;
  sample_fmt?: string;
  sample_rate?: string;
}

export interface Disposition {
  attached_pic: number;
  clean_effects: number;
  comment: number;
  default: number;
  dub: number;
  forced: number;
  hearing_impaired: number;
  karaoke: number;
  lyrics: number;
  original: number;
  timed_thumbnails: number;
  visual_impaired: number;
}

export interface Checksums {
  id: string;
  xx_hash: string;
}

export interface MetadataFlags {
  id: string;
  is_360: boolean;
  is_hdr: boolean;
}
