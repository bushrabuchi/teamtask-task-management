import { useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";

import AppText from "@/components/ui/AppText";
import AppButton from "@/components/ui/AppButton";
import AppCard from "@/components/ui/AppCard";
import AppInput from "@/components/ui/AppInput";
import Avatar from "@/components/ui/Avatar";
import ScreenContainer from "@/components/ui/ScreenContainer";

import { lightColors, darkColors } from "../../theme/color";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { shadows } from "../../theme/shadows";
import { typography } from "../../theme/typography";

const categories = [
  { id: "cleaning", name: "Cleaning", icon: "🧹" },
  { id: "repairs", name: "Repairs", icon: "🔧" },
  { id: "beauty", name: "Beauty", icon: "✨" },
  { id: "moving", name: "Moving", icon: "📦" },
];

const services = [
  {
    id: "service-1",
    name: "Home Cleaning",
    description: "Professional home cleaning",
    price: 120,
    rating: "4.9",
    category: "cleaning",
    icon: "🏠",
  },
  {
    id: "service-2",
    name: "AC Maintenance",
    description: "Inspection and maintenance",
    price: 150,
    rating: "4.8",
    category: "repairs",
    icon: "❄️",
  },
  {
    id: "service-3",
    name: "Beauty at Home",
    description: "Professional beauty services",
    price: 180,
    rating: "4.9",
    category: "beauty",
    icon: "💆",
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleBooking = (serviceName: string) => {
    Alert.alert(
      "Start booking",
      `You selected ${serviceName}. We will build the complete booking flow in a later phase.`,
    );
  };

  return (
    <ScreenContainer>
      {/* Welcome header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Avatar name="Bushra C C" size={50} />

          <View>
            <AppText variant="bodySmall" color={lightColors.textSecondary}>
              Good morning
            </AppText>

            <AppText variant="title">Bushra!</AppText>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Notifications"
          onPress={() => Alert.alert("Notifications", "No new notifications.")}
          style={styles.notificationButton}
        >
          <AppText variant="title" color={lightColors.navy}>
            ♧
          </AppText>
          <View style={styles.notificationDot} />
        </Pressable>
      </View>

      {/* Featured booking */}
      <View style={styles.featuredCard}>
        <View style={styles.featuredTop}>
          <AppText variant="caption" color="#DCE9F7">
            YOUR NEXT BOOKING
          </AppText>

          <View style={styles.statusBadge}>
            <AppText variant="caption" color="#FFFFFF">
              CONFIRMED
            </AppText>
          </View>
        </View>

        <AppText variant="heading" color="#FFFFFF">
          Home cleaning
        </AppText>

        <AppText variant="bodySmall" color="#DCE9F7">
          Tomorrow · 10:00 AM
        </AppText>

        <View style={styles.bookingDivider} />

        <View style={styles.bookingFooter}>
          <View>
            <AppText variant="caption" color="#DCE9F7">
              BOOKING REFERENCE
            </AppText>

            <AppText variant="label" color="#FFFFFF">
              #BK-1024
            </AppText>
          </View>

          <AppText variant="title" color="#FFFFFF">
            SAR 120
          </AppText>
        </View>
      </View>

      {/* Search */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText variant="title">Find a service</AppText>
        </View>

        <AppInput
          label="Search"
          placeholder="Search cleaning, repairs..."
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
        />
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText variant="title">Categories</AppText>

          <AppText variant="bodySmall" color={lightColors.primary}>
            Explore
          </AppText>
        </View>

        <View style={styles.categoryList}>
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <Pressable
                key={category.id}
                onPress={() =>
                  setSelectedCategory(isSelected ? "all" : category.id)
                }
                style={[
                  styles.categoryItem,
                  isSelected && styles.selectedCategory,
                ]}
              >
                <AppText variant="title">{category.icon}</AppText>

                <AppText
                  variant="caption"
                  color={isSelected ? "#FFFFFF" : lightColors.text}
                >
                  {category.name}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Popular services */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText variant="title">Popular services</AppText>

          <AppText variant="bodySmall" color={lightColors.primary}>
            View all
          </AppText>
        </View>

        {filteredServices.length === 0 ? (
          <AppCard>
            <AppText color={lightColors.textSecondary}>
              No services found. Try another search.
            </AppText>
          </AppCard>
        ) : (
          filteredServices.map((service) => (
            <AppCard key={service.id}>
              <View style={styles.serviceRow}>
                <View style={styles.serviceIcon}>
                  <AppText variant="heading">{service.icon}</AppText>
                </View>

                <View style={styles.serviceDetails}>
                  <AppText variant="subtitle">{service.name}</AppText>

                  <AppText variant="caption" color={lightColors.textSecondary}>
                    {service.description}
                  </AppText>

                  <AppText variant="label" color={lightColors.navy}>
                    From SAR {service.price}
                  </AppText>

                  <AppText variant="caption" color={lightColors.warning}>
                    ★ {service.rating}
                  </AppText>
                </View>

                <AppButton
                  title="Book"
                  variant="gold"
                  onPress={() => handleBooking(service.name)}
                />
              </View>
            </AppCard>
          ))
        )}
      </View>

      {/* Booking assistance */}
      <AppCard style={styles.helpCard}>
        <AppText variant="subtitle">Need help finding a service?</AppText>

        <AppText variant="bodySmall" color={lightColors.textSecondary}>
          Our team can help you find the right professional.
        </AppText>

        <AppButton
          title="Contact support"
          variant="secondary"
          onPress={() =>
            Alert.alert("Support", "Support contact will be added later.")
          }
        />
      </AppCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  notificationButton: {
    width: 46,
    height: 46,
    borderRadius: radius.full,
    backgroundColor: lightColors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: lightColors.border,
  },
  notificationDot: {
    position: "absolute",
    top: 9,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: radius.full,
    backgroundColor: lightColors.danger,
  },
  featuredCard: {
    backgroundColor: lightColors.navy,
    borderRadius: radius.xl,
    padding: spacing.xl,
    gap: spacing.md,
    overflow: "hidden",
  },
  featuredTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusBadge: {
    backgroundColor: "#23834B",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  bookingDivider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  bookingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    gap: spacing.md,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryList: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  categoryItem: {
    flex: 1,
    minHeight: 86,
    borderRadius: radius.lg,
    backgroundColor: lightColors.surface,
    borderWidth: 1,
    borderColor: lightColors.border,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    padding: spacing.xs,
  },
  selectedCategory: {
    backgroundColor: lightColors.primary,
    borderColor: lightColors.primary,
  },
  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  serviceIcon: {
    width: 54,
    height: 54,
    borderRadius: radius.lg,
    backgroundColor: lightColors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceDetails: {
    flex: 1,
    gap: spacing.xs,
  },
  helpCard: {
    backgroundColor: lightColors.surfaceSecondary,
    gap: spacing.md,
  },
});
